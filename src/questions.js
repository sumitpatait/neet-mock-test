// ---------------------------------------------------------------------------
// questions.js — modular NEET question bank
//
// HOW TO ADD QUESTIONS
// When you reply "next", paste each batch's array items INSIDE the matching
// batchN array below (between the [ ] brackets). Ids must be unique and
// follow the plan: 1–90 Biotechnology, 91–180 Locomotion and Movement.
//
// While all six batches are empty, the 4 sample questions are used so the app
// runs immediately. As soon as you paste any batch, the samples drop out.
// ---------------------------------------------------------------------------

export const CH_BIO = "Biotechnology: Principles and Processes";
export const CH_LOC = "Locomotion and Movement";

// 4 sample questions (ids chosen so they never clash with the real batches)
const sampleQuestions = [
  {
    id: 1,
    chapter: CH_BIO,
    subtopic: "Restriction Enzymes",
    type: "Direct",
    question: "In the name of the restriction enzyme EcoRI, the letter 'R' stands for:",
    options: [
      "A) Restriction",
      "B) The strain RY13 of the bacterium",
      "C) Recombinant",
      "D) Rough colony type",
    ],
    correctIndex: 1,
    explanation:
      "NCERT (Biotechnology: Principles and Processes): in EcoRI, 'E' = genus Escherichia, 'co' = species coli, 'R' = strain RY13, and 'I' = order of discovery of the enzyme in that strain. Trap: 'Restriction' is tempting, but it is not what R denotes in the nomenclature.",
  },
  {
    id: 2,
    chapter: CH_BIO,
    subtopic: "PCR",
    type: "Statement-Based",
    question:
      "Statement I: Taq polymerase, isolated from Thermus aquaticus, remains active during the high-temperature denaturation step of PCR.\nStatement II: In PCR, annealing of the primers to the template is carried out at 94°C.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct",
    ],
    correctIndex: 2,
    explanation:
      "NCERT: Taq polymerase is thermostable, so it survives denaturation (about 94°C), which is why Statement I is correct. Annealing of primers happens at a much lower temperature (about 50–60°C); 94°C is the denaturation temperature, so Statement II is incorrect. Extension is done at about 72°C.",
  },
  {
    id: 91,
    chapter: CH_LOC,
    subtopic: "Joints",
    type: "Match",
    question:
      "Match List-I with List-II.\n\nList-I (Type of synovial joint)\nA. Ball and socket\nB. Hinge\nC. Pivot\nD. Gliding\n\nList-II (Example)\nI. Knee joint\nII. Between atlas and axis\nIII. Between the carpals\nIV. Between humerus and pectoral girdle",
    options: [
      "A) A-IV, B-I, C-II, D-III",
      "B) A-I, B-IV, C-II, D-III",
      "C) A-IV, B-II, C-I, D-III",
      "D) A-III, B-I, C-II, D-IV",
    ],
    correctIndex: 0,
    explanation:
      "NCERT (Locomotion and Movement): ball and socket – between humerus and pectoral girdle; hinge – knee joint; pivot – between atlas and axis; gliding – between the carpals; saddle – carpometacarpal joint of the thumb. Traps: swapping ball-and-socket with hinge, or pivot with hinge.",
  },
  {
    id: 92,
    chapter: CH_LOC,
    subtopic: "Mechanism of Muscle Contraction",
    type: "Assertion-Reason",
    question:
      "Assertion (A): During muscle contraction, the length of the A-band remains unchanged.\nReason (R): Thick (myosin) filaments do not shorten; the thin (actin) filaments slide over them toward the centre of the sarcomere.",
    options: [
      "A) Both A and R are true and R is the correct explanation of A",
      "B) Both A and R are true but R is not the correct explanation of A",
      "C) A is true but R is false",
      "D) A is false but R is true",
    ],
    correctIndex: 0,
    explanation:
      "NCERT: the A-band is made of myosin (thick filaments) and stays the same length, while the I-bands and H-zone shorten and Z-lines move closer as actin slides inward (sliding filament theory). Hence R correctly explains A.",
  },
];

// Paste each batch's question objects between the brackets.
export const batch1 = []; // Q1–Q30    Biotechnology
export const batch2 = []; // Q31–Q60   Biotechnology
export const batch3 = []; // Q61–Q90   Biotechnology
export const batch4 = []; // Q91–Q120  Locomotion and Movement
export const batch5 = []; // Q121–Q150 Locomotion and Movement
export const batch6 = []; // Q151–Q180 Locomotion and Movement

const full = [...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...batch6];

export const questions = (full.length ? full : sampleQuestions)
  .slice()
  .sort((a, b) => a.id - b.id);
