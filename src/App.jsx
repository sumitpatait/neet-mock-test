import { useEffect, useMemo, useState } from "react";
import { questions, CH_BIO, CH_LOC } from "./questions";
import "./App.css";

const TEST_SECONDS = 180 * 60; // 180-minute countdown
const MARK_CORRECT = 4;
const MARK_WRONG = -1;
const MAX_SCORE = questions.length * MARK_CORRECT; // 720 once all 180 are added
const STORE_KEY = "neet-mock-v1";

const TABS = [
  { key: "all", label: "All" },
  { key: "bio", label: "Biotech Part 1" },
  { key: "loc", label: "Locomotion & Movement" },
];

const STATUS_LABELS = {
  notVisited: "Not Visited",
  notAnswered: "Not Answered",
  answered: "Answered",
  marked: "Marked for Review",
  answeredMarked: "Answered & Marked for Review",
};

function loadStore() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function formatTime(sec) {
  const h = String(Math.floor(sec / 3600)).padStart(2, "0");
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

export default function App() {
  const stored = useMemo(loadStore, []);

  const [phase, setPhase] = useState(stored?.phase ?? "intro"); // intro | test | result
  const [saved, setSaved] = useState(stored?.saved ?? {}); // { [id]: optionIndex }
  const [marked, setMarked] = useState(stored?.marked ?? {}); // { [id]: true }
  const [visited, setVisited] = useState(stored?.visited ?? {}); // { [id]: true }
  const [endTime, setEndTime] = useState(stored?.endTime ?? null);
  const [pending, setPending] = useState({}); // unsaved selection for the current question
  const [tab, setTab] = useState("all");
  const [pos, setPos] = useState(0);
  const [now, setNow] = useState(Date.now());

  // ----- derived data -----
  const list = useMemo(() => {
    if (tab === "bio") return questions.filter((q) => q.chapter === CH_BIO);
    if (tab === "loc") return questions.filter((q) => q.chapter === CH_LOC);
    return questions;
  }, [tab]);

  const q = list[Math.min(pos, list.length - 1)];
  const remaining = endTime ? Math.max(0, Math.ceil((endTime - now) / 1000)) : TEST_SECONDS;

  const selected = q ? (q.id in pending ? pending[q.id] : saved[q.id]) : undefined;

  const statusOf = (id) => {
    const hasAns = saved[id] !== undefined;
    if (marked[id]) return hasAns ? "answeredMarked" : "marked";
    if (hasAns) return "answered";
    return visited[id] ? "notAnswered" : "notVisited";
  };

  const counts = useMemo(() => {
    const c = { notVisited: 0, notAnswered: 0, answered: 0, marked: 0, answeredMarked: 0 };
    list.forEach((item) => {
      const hasAns = saved[item.id] !== undefined;
      if (marked[item.id]) c[hasAns ? "answeredMarked" : "marked"]++;
      else if (hasAns) c.answered++;
      else if (visited[item.id]) c.notAnswered++;
      else c.notVisited++;
    });
    return c;
  }, [list, saved, marked, visited]);

  // ----- effects -----
  useEffect(() => {
    if (phase !== "test") return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [phase]);

  useEffect(() => {
    if (phase === "test" && endTime && remaining === 0) setPhase("result");
  }, [phase, endTime, remaining]);

  useEffect(() => {
    if (phase === "test" && q) setVisited((v) => (v[q.id] ? v : { ...v, [q.id]: true }));
  }, [phase, q]);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ phase, saved, marked, visited, endTime }));
    } catch {
      /* storage unavailable: the test still works, just without resume */
    }
  }, [phase, saved, marked, visited, endTime]);

  // ----- actions -----
  const startTest = () => {
    setSaved({});
    setMarked({});
    setVisited({});
    setPending({});
    setTab("all");
    setPos(0);
    const end = Date.now() + TEST_SECONDS * 1000;
    setEndTime(end);
    setNow(Date.now());
    setPhase("test");
  };

  const resetAll = () => {
    try {
      localStorage.removeItem(STORE_KEY);
    } catch {
      /* ignore */
    }
    setPhase("intro");
    setSaved({});
    setMarked({});
    setVisited({});
    setPending({});
    setEndTime(null);
  };

  const dropPending = () => setPending((p) => {
    if (!q || !(q.id in p)) return p;
    const { [q.id]: _omit, ...rest } = p;
    return rest;
  });

  const goTo = (i) => {
    dropPending(); // unsaved choice is discarded, as in NTA
    setPos(i);
  };

  const changeTab = (key) => {
    dropPending();
    setTab(key);
    setPos(0);
  };

  const commit = () => {
    if (!q) return;
    if (q.id in pending) {
      const val = pending[q.id];
      setSaved((s) => {
        const next = { ...s };
        if (val === null) delete next[q.id];
        else next[q.id] = val;
        return next;
      });
    }
    dropPending();
  };

  const advance = () => setPos((p) => Math.min(p + 1, list.length - 1));

  const saveNext = () => {
    commit();
    setMarked((m) => {
      const { [q.id]: _omit, ...rest } = m;
      return rest;
    });
    advance();
  };

  const markNext = () => {
    commit();
    setMarked((m) => ({ ...m, [q.id]: true }));
    advance();
  };

  const clearResponse = () => {
    setSaved((s) => {
      const { [q.id]: _omit, ...rest } = s;
      return rest;
    });
    dropPending();
  };

  const choose = (i) => setPending((p) => ({ ...p, [q.id]: i }));

  const submitTest = () => {
    const answered = Object.keys(saved).length;
    const ok = window.confirm(
      `You have answered ${answered} of ${questions.length} questions.\nOnly saved answers are counted. Submit the test now?`
    );
    if (ok) setPhase("result");
  };

  // ----- screens -----
  if (phase === "intro") return <Intro onStart={startTest} resume={!!stored && stored.phase === "test"} />;
  if (phase === "result") return <Result saved={saved} onRestart={resetAll} />;

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">NEET (UG) Mock Test · Biology</div>
        <div className={`timer ${remaining < 600 ? "timer-low" : ""}`} aria-live="off">
          Time left <strong>{formatTime(remaining)}</strong>
        </div>
      </header>

      <div className="tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={tab === t.key}
            className={`tab ${tab === t.key ? "tab-active" : ""}`}
            onClick={() => changeTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="layout">
        <main className="qpane">
          {q ? (
            <>
              <div className="qmeta">
                <span>Question {pos + 1} of {list.length}</span>
                <span className="qtag">{q.type}</span>
                <span className="qtag qtag-muted">{q.chapter}</span>
                <span className="marks">+{MARK_CORRECT} / {MARK_WRONG}</span>
              </div>
              <p className="qtext">{q.question}</p>
              <div className="options" role="radiogroup" aria-label="Answer options">
                {q.options.map((opt, i) => (
                  <label key={i} className={`option ${selected === i ? "option-on" : ""}`}>
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      checked={selected === i}
                      onChange={() => choose(i)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>

              <div className="actions">
                <button className="btn btn-mark" onClick={markNext}>Mark for Review &amp; Next</button>
                <button className="btn btn-clear" onClick={clearResponse}>Clear Response</button>
                <button className="btn btn-save" onClick={saveNext}>Save &amp; Next</button>
                <span className="spacer" />
                <button className="btn btn-nav" onClick={() => goTo(Math.max(pos - 1, 0))} disabled={pos === 0}>
                  Back
                </button>
                <button
                  className="btn btn-nav"
                  onClick={() => goTo(Math.min(pos + 1, list.length - 1))}
                  disabled={pos === list.length - 1}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <p>No questions in this section yet.</p>
          )}
        </main>

        <aside className="palette">
          <h2 className="palette-title">Question Palette</h2>
          <div className="grid">
            {list.map((item, i) => {
              const st = statusOf(item.id);
              return (
                <button
                  key={item.id}
                  className={`pbtn st-${st} ${i === pos ? "pbtn-current" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Question ${i + 1}: ${STATUS_LABELS[st]}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <ul className="legend">
            {Object.keys(STATUS_LABELS).map((k) => (
              <li key={k}>
                <span className={`pbtn pbtn-legend st-${k}`}>{counts[k]}</span>
                {STATUS_LABELS[k]}
              </li>
            ))}
          </ul>

          <button className="btn btn-submit" onClick={submitTest}>Submit Test</button>
        </aside>
      </div>
    </div>
  );
}

function Intro({ onStart, resume }) {
  return (
    <div className="intro">
      <h1>NEET (UG) Mock Test: Biology</h1>
      <p className="intro-sub">
        Biotechnology: Principles and Processes · Locomotion and Movement
      </p>
      <ul className="rules">
        <li>{questions.length} questions, single correct answer each.</li>
        <li>Time allowed: 180 minutes. The test submits itself at 00:00.</li>
        <li>Marking: +4 for a correct answer, −1 for an incorrect answer, 0 if unattempted.</li>
        <li>Maximum score: {MAX_SCORE}.</li>
        <li>Only answers saved with Save &amp; Next or Mark for Review &amp; Next are counted.</li>
        <li>Your progress and timer survive a page refresh.</li>
      </ul>
      <div className="legend legend-intro">
        {Object.keys(STATUS_LABELS).map((k) => (
          <div key={k} className="legend-row">
            <span className={`pbtn pbtn-legend st-${k}`} />
            {STATUS_LABELS[k]}
          </div>
        ))}
      </div>
      <button className="btn btn-save btn-big" onClick={onStart}>
        {resume ? "Restart test" : "Start test"}
      </button>
      {resume && <p className="note">An earlier attempt is saved. Reload during a test to resume it.</p>}
    </div>
  );
}

function Result({ saved, onRestart }) {
  const [filter, setFilter] = useState("all");

  const stats = useMemo(() => {
    const blank = () => ({ total: 0, correct: 0, wrong: 0, skipped: 0 });
    const all = blank();
    const byChapter = { [CH_BIO]: blank(), [CH_LOC]: blank() };
    questions.forEach((qq) => {
      const bucket = byChapter[qq.chapter] ?? (byChapter[qq.chapter] = blank());
      const a = saved[qq.id];
      [all, bucket].forEach((b) => {
        b.total++;
        if (a === undefined) b.skipped++;
        else if (a === qq.correctIndex) b.correct++;
        else b.wrong++;
      });
    });
    const finish = (b) => ({
      ...b,
      score: b.correct * MARK_CORRECT + b.wrong * MARK_WRONG,
      max: b.total * MARK_CORRECT,
      accuracy: b.correct + b.wrong ? Math.round((b.correct / (b.correct + b.wrong)) * 1000) / 10 : 0,
    });
    return {
      all: finish(all),
      chapters: Object.entries(byChapter)
        .filter(([, b]) => b.total > 0)
        .map(([name, b]) => [name, finish(b)]),
    };
  }, [saved]);

  const reviewList = questions.filter((qq) => {
    const a = saved[qq.id];
    if (filter === "correct") return a === qq.correctIndex;
    if (filter === "wrong") return a !== undefined && a !== qq.correctIndex;
    if (filter === "skipped") return a === undefined;
    return true;
  });

  const { all } = stats;

  return (
    <div className="result">
      <h1>Result</h1>
      <div className="score-card">
        <div className="score-main">
          <span className="score-num">{all.score}</span>
          <span className="score-max">/ {all.max}</span>
        </div>
        <dl className="score-grid">
          <div><dt>Accuracy</dt><dd>{all.accuracy}%</dd></div>
          <div><dt>Correct</dt><dd>{all.correct}</dd></div>
          <div><dt>Incorrect</dt><dd>{all.wrong}</dd></div>
          <div><dt>Unattempted</dt><dd>{all.skipped}</dd></div>
        </dl>
      </div>
      <p className="note">Accuracy = correct ÷ attempted. Marking: +4 / −1 / 0.</p>

      <h2>Chapter-wise breakdown</h2>
      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Chapter</th><th>Score</th><th>Correct</th><th>Incorrect</th><th>Unattempted</th><th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            {stats.chapters.map(([name, b]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{b.score} / {b.max}</td>
                <td>{b.correct}</td>
                <td>{b.wrong}</td>
                <td>{b.skipped}</td>
                <td>{b.accuracy}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Review mode</h2>
      <div className="tabs">
        {[
          ["all", "All"],
          ["correct", "Correct"],
          ["wrong", "Incorrect"],
          ["skipped", "Unattempted"],
        ].map(([k, label]) => (
          <button
            key={k}
            className={`tab ${filter === k ? "tab-active" : ""}`}
            aria-pressed={filter === k}
            onClick={() => setFilter(k)}
          >
            {label}
          </button>
        ))}
      </div>

      {reviewList.length === 0 && <p>No questions in this filter.</p>}

      {reviewList.map((qq) => {
        const a = saved[qq.id];
        const verdict = a === undefined ? "skipped" : a === qq.correctIndex ? "correct" : "wrong";
        return (
          <article key={qq.id} className={`review review-${verdict}`}>
            <div className="qmeta">
              <span>Q{qq.id}</span>
              <span className="qtag">{qq.type}</span>
              <span className="qtag qtag-muted">{qq.subtopic}</span>
              <span className={`verdict verdict-${verdict}`}>
                {verdict === "correct" ? "+4 Correct" : verdict === "wrong" ? "−1 Incorrect" : "0 Unattempted"}
              </span>
            </div>
            <p className="qtext">{qq.question}</p>
            <ul className="review-options">
              {qq.options.map((opt, i) => {
                const isRight = i === qq.correctIndex;
                const isMine = i === a;
                return (
                  <li
                    key={i}
                    className={`ropt ${isRight ? "ropt-right" : ""} ${isMine && !isRight ? "ropt-wrong" : ""}`}
                  >
                    {opt}
                    {isRight && <em> · correct answer</em>}
                    {isMine && <em> · your answer</em>}
                  </li>
                );
              })}
            </ul>
            <p className="explain"><strong>Explanation:</strong> {qq.explanation}</p>
          </article>
        );
      })}

      <button className="btn btn-save btn-big" onClick={onRestart}>Take the test again</button>
    </div>
  );
}
