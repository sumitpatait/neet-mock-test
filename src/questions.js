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

const full = [// --- BATCH 2: BIOTECHNOLOGY: PRINCIPLES AND PROCESSES (Q31 - Q60) ---
  {
    id: 31,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "PCR",
    type: "Direct",
    question: "The thermostable DNA polymerase (Taq polymerase) used in PCR is isolated from the bacterium:",
    options: [
      "A) Escherichia coli",
      "B) Thermus aquaticus",
      "C) Agrobacterium tumefaciens",
      "D) Bacillus thuringiensis"
    ],
    correctIndex: 1,
    explanation: "Taq polymerase is isolated from Thermus aquaticus and remains active during the high-temperature denaturation step of double-stranded DNA."
  },
  {
    id: 32,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "PCR",
    type: "Direct",
    question: "In PCR, primers are:",
    options: [
      "A) Small chemically synthesized oligonucleotides complementary to the regions of DNA",
      "B) Enzymes that unwind the DNA double helix",
      "C) Deoxyribonucleotides used to extend the DNA strand",
      "D) Restriction endonucleases that cut the template DNA"
    ],
    correctIndex: 0,
    explanation: "NCERT defines primers as small chemically synthesized oligonucleotides that are complementary to the regions of DNA."
  },
  {
    id: 33,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "PCR",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: If the process of replication of DNA in PCR is repeated many times, the segment of DNA can be amplified to approximately billion times (1 billion copies) after 30 cycles.\nStatement II: The amplified DNA fragment cannot be used to ligate with a vector for further cloning.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 2,
    explanation: "Statement I is correct (30 cycles yield ~1 billion copies). Statement II is incorrect because the amplified fragment, if desired, can be used to ligate with a vector for further cloning."
  },
  {
    id: 34,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Bioreactors",
    type: "Direct",
    question: "To produce large quantities of recombinant products, bioreactors are used where large volumes of culture can be processed. What is the typical volume range mentioned in NCERT?",
    options: [
      "A) 10–50 litres",
      "B) 100–1000 litres",
      "C) 5000–10000 litres",
      "D) 1–10 litres"
    ],
    correctIndex: 1,
    explanation: "NCERT states that bioreactors can process large volumes (100–1000 litres) of culture."
  },
  {
    id: 35,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Bioreactors",
    type: "Direct",
    question: "Why is a stirred-tank bioreactor usually cylindrical or provided with a curved base?",
    options: [
      "A) To reduce the cost of steel",
      "B) To facilitate the mixing of the reactor contents",
      "C) To prevent the entry of oxygen",
      "D) To increase the temperature of the culture"
    ],
    correctIndex: 1,
    explanation: "A stirred-tank reactor is usually cylindrical or has a curved base to facilitate uniform mixing of the reactor contents."
  },
  {
    id: 36,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Bioreactors",
    type: "Direct",
    question: "In a sparged stirred-tank bioreactor, sterile air bubbles are sparged through the reactor primarily to:",
    options: [
      "A) Maintain acidic pH",
      "B) Dramatically increase the surface area for oxygen transfer",
      "C) Break down foam formed during fermentation",
      "D) Cool down the culture medium"
    ],
    correctIndex: 1,
    explanation: "In a sparged stirred-tank bioreactor, bubbles dramatically increase the oxygen transfer area."
  },
  {
    id: 37,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Bioreactors",
    type: "Multi-Statement",
    question: "Which of the following components are present in a standard stirred-tank bioreactor?\n(A) Agitator system\n(B) Oxygen delivery system\n(C) Foam control system\n(D) Temperature and pH control system\n(E) Sampling ports\nChoose the correct answer:",
    options: [
      "A) (A), (B), and (C) only",
      "B) (A), (B), (D), and (E) only",
      "C) (B), (C), (D), and (E) only",
      "D) (A), (B), (C), (D), and (E)"
    ],
    correctIndex: 3,
    explanation: "All five components are explicitly listed in NCERT as parts of a stirred-tank bioreactor."
  },
  {
    id: 38,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Bioreactors",
    type: "Assertion-Reason",
    question: "Assertion (A): A continuous culture system produces a larger biomass leading to higher yields of desired protein.\nReason (R): In a continuous culture system, used medium is drained out from one side while fresh medium is added from the other to maintain cells in their physiologically most active log/exponential phase.",
    options: [
      "A) Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "B) Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "C) (A) is true but (R) is false",
      "D) (A) is false but (R) is true"
    ],
    correctIndex: 0,
    explanation: "Continuous culture maintains cells in the log/exponential phase by continuously draining used medium and adding fresh medium, maximizing biomass and recombinant protein yield."
  },
  {
    id: 39,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Downstream Processing",
    type: "Direct",
    question: "The processes including separation and purification of the biosynthetic product before it is ready for marketing as a finished product are collectively referred to as:",
    options: [
      "A) Upstream processing",
      "B) Downstream processing",
      "C) Bioprocess engineering",
      "D) Elution"
    ],
    correctIndex: 1,
    explanation: "Downstream processing includes separation and purification, formulation with suitable preservatives, clinical trials (for drugs), and strict quality control testing."
  },
  {
    id: 40,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Downstream Processing",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: Downstream processing and quality control testing are identical for all biotechnological products.\nStatement II: In the case of drugs, the formulated product must undergo thorough clinical trials.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 3,
    explanation: "Statement I is incorrect because NCERT explicitly states that downstream processing and quality control testing VARY from product to product."
  },
  {
    id: 41,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Processes of rDNA Technology",
    type: "Direct",
    question: "If any protein-encoding gene is expressed in a heterologous host, it is called a:",
    options: [
      "A) Native protein",
      "B) Recombinant protein",
      "C) Selectable marker",
      "D) Restriction enzyme"
    ],
    correctIndex: 1,
    explanation: "NCERT defines a recombinant protein as any protein-encoding gene expressed in a heterologous host."
  },
  {
    id: 42,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Processes of rDNA Technology",
    type: "Direct",
    question: "During the isolation of purified DNA, RNA is removed by treatment with ______ and proteins are removed by treatment with ______:",
    options: [
      "A) Protease; ribonuclease",
      "B) Ribonuclease; protease",
      "C) Lysozyme; cellulase",
      "D) Chitinase; DNA ligase"
    ],
    correctIndex: 1,
    explanation: "RNA is removed by ribonuclease (RNase) and proteins (like histones) are removed by protease."
  },
  {
    id: 43,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Processes of rDNA Technology",
    type: "Direct",
    question: "Which technique is used to check the progression of a restriction enzyme digestion?",
    options: [
      "A) Polymerase Chain Reaction",
      "B) Agarose gel electrophoresis",
      "C) Spooling",
      "D) Blue-white screening"
    ],
    correctIndex: 1,
    explanation: "NCERT states that agarose gel electrophoresis is employed to check the progression of a restriction enzyme digestion."
  },
  {
    id: 44,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Restriction Enzymes",
    type: "Direct",
    question: "How many restriction enzymes have been isolated from over 230 strains of bacteria, each recognizing different recognition sequences?",
    options: [
      "A) More than 100",
      "B) More than 500",
      "C) More than 900",
      "D) More than 2000"
    ],
    correctIndex: 2,
    explanation: "NCERT states that today we know more than 900 restriction enzymes that have been isolated from over 230 strains of bacteria."
  },
  {
    id: 45,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Restriction Enzymes",
    type: "Direct",
    question: "A palindrome in DNA is a sequence of base pairs that:",
    options: [
      "A) Reads the same on the two strands when orientation of reading is kept the same",
      "B) Reads the same on a single strand from 5' to 3' and 3' to 5'",
      "C) Contains only A and T base pairs",
      "D) Is always 10 base pairs long"
    ],
    correctIndex: 0,
    explanation: "A DNA palindrome reads the same on both strands when the orientation of reading is kept the same (e.g., 5' → 3' on both strands)."
  },
  {
    id: 46,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Restriction Enzymes",
    type: "Direct",
    question: "Which enzyme joins the sugar-phosphate backbones of two DNA fragments by forming phosphodiester bonds?",
    options: [
      "A) Restriction endonuclease",
      "B) DNA polymerase",
      "C) DNA ligase",
      "D) Alkaline phosphatase"
    ],
    correctIndex: 2,
    explanation: "DNA ligase acts on cut DNA molecules and joins their ends (forming phosphodiester bonds) to create recombinant DNA."
  },
  {
    id: 47,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: Bacteriophages, because of their high number per cell, have very high copy numbers of their genome within bacterial cells.\nStatement II: Some plasmids may have only one or two copies per cell whereas others may have 15–100 copies per cell.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 0,
    explanation: "Both statements are direct NCERT lines explaining why plasmids and bacteriophages are used as cloning vectors."
  },
  {
    id: 48,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Direct",
    question: "Normally, which of the following genes are considered useful selectable markers for E. coli?",
    options: [
      "A) Genes encoding resistance to ampicillin, chloramphenicol, tetracycline, or kanamycin",
      "B) Genes encoding resistance to insulin and human growth hormone",
      "C) Genes encoding lysozyme and chitinase",
      "D) Genes encoding Taq polymerase"
    ],
    correctIndex: 0,
    explanation: "Genes encoding resistance to antibiotics such as ampicillin, chloramphenicol, tetracycline, or kanamycin are useful selectable markers for E. coli, as normal E. coli cells do not carry resistance against any of these."
  },
  {
    id: 49,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Direct",
    question: "In pBR322, which of the following restriction sites is located within the ampicillin resistance (ampR) gene?",
    options: [
      "A) BamHI",
      "B) SalI",
      "C) PstI",
      "D) EcoRI"
    ],
    correctIndex: 2,
    explanation: "In pBR322, PstI and PvuI are located within the ampR gene; BamHI and SalI are within tetR; EcoRI, ClaI, and HindIII are outside both antibiotic resistance genes."
  },
  {
    id: 50,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Direct",
    question: "What is the role of a selectable marker in a cloning vector?",
    options: [
      "A) To initiate replication of the vector",
      "B) To help in identifying and eliminating non-transformants and selectively permitting the growth of transformants",
      "C) To cut the foreign DNA at specific palindromic sites",
      "D) To increase the copy number of the plasmid"
    ],
    correctIndex: 1,
    explanation: "A selectable marker helps in identifying and eliminating non-transformants and selectively permitting the growth of transformants."
  },
  {
    id: 51,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Principles of Biotechnology",
    type: "Direct",
    question: "Why is sexual reproduction considered advantageous over asexual reproduction in traditional breeding, yet still limited compared to genetic engineering?",
    options: [
      "A) Sexual reproduction preserves genetic information, whereas asexual reproduction permits variation",
      "B) Traditional hybridization often leads to inclusion and multiplication of undesirable genes along with desired genes",
      "C) Genetic engineering cannot transfer genes across species",
      "D) Asexual reproduction always causes mutations"
    ],
    correctIndex: 1,
    explanation: "Traditional hybridization procedures very often lead to inclusion and multiplication of undesirable genes along with the desired genes, which rDNA technology overcomes."
  },
  {
    id: 52,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Principles of Biotechnology",
    type: "Multi-Statement",
    question: "Which of the following are the three basic steps in genetically modifying an organism according to NCERT?\n(A) Identification of DNA with desirable genes\n(B) Introduction of the identified DNA into the host\n(C) Maintenance of introduced DNA in the host and transfer of the DNA to its progeny\n(D) Destruction of the host genome\nChoose the correct option:",
    options: [
      "A) (A), (B), and (C) only",
      "B) (A), (B), and (D) only",
      "C) (B), (C), and (D) only",
      "D) (A) and (C) only"
    ],
    correctIndex: 0,
    explanation: "NCERT lists (A), (B), and (C) as the three basic steps in genetically modifying an organism."
  },
  {
    id: 53,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Principles of Biotechnology",
    type: "Assertion-Reason",
    question: "Assertion (A): A piece of alien DNA transferred into an organism generally cannot multiply itself in the progeny cells of the organism.\nReason (R): Alien DNA can only replicate if it gets integrated into the genome of the recipient or is linked to an origin of replication.",
    options: [
      "A) Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "B) Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "C) (A) is true but (R) is false",
      "D) (A) is false but (R) is true"
    ],
    correctIndex: 0,
    explanation: "Without an origin of replication (ori) or integration into the host chromosome, alien DNA will not replicate in the progeny cells."
  },
  {
    id: 54,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Restriction Enzymes",
    type: "Direct",
    question: "When EcoRI cuts the sequence 5'-GAATTC-3', where exactly does it make the cut on each strand?",
    options: [
      "A) Between A and A",
      "B) Between G and A",
      "C) Between T and C",
      "D) Between A and T"
    ],
    correctIndex: 1,
    explanation: "EcoRI cuts between G and A on both strands (5'-G↓AATTC-3' and 3'-CTTAA↑G-5'), leaving 5'-AATT overhangs."
  },
  {
    id: 55,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Gel Electrophoresis",
    type: "Direct",
    question: "Why is ethidium bromide used in agarose gel electrophoresis?",
    options: [
      "A) To give DNA a negative charge",
      "B) To stain DNA so it appears as bright orange bands under UV light",
      "C) To dissolve the agarose gel during elution",
      "D) To cut DNA into smaller fragments"
    ],
    correctIndex: 1,
    explanation: "Ethidium bromide intercalates with DNA and fluoresces bright orange when exposed to UV radiation."
  },
  {
    id: 56,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Competent Host",
    type: "Direct",
    question: "In the biolistics (gene gun) method, plant cells are bombarded with high-velocity microparticles coated with DNA. These microparticles are made of:",
    options: [
      "A) Iron or copper",
      "B) Gold or tungsten",
      "C) Silver or aluminium",
      "D) Lead or zinc"
    ],
    correctIndex: 1,
    explanation: "Biolistics uses high-velocity microparticles of gold or tungsten coated with DNA."
  },
  {
    id: 57,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Processes of rDNA Technology",
    type: "Direct",
    question: "What is 'spooling' in the context of DNA isolation?",
    options: [
      "A) Separating DNA fragments on an agarose gel",
      "B) Winding/collecting precipitated fine threads of purified DNA from chilled ethanol",
      "C) Amplifying DNA using Taq polymerase",
      "D) Ligating foreign DNA into a plasmid"
    ],
    correctIndex: 1,
    explanation: "After adding chilled ethanol, purified DNA precipitates as fine threads in suspension, which can be removed by spooling."
  },
  {
    id: 58,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Direct",
    question: "In pBR322, if a foreign gene is inserted at the PvuI site, which antibiotic resistance will be lost?",
    options: [
      "A) Tetracycline resistance",
      "B) Ampicillin resistance",
      "C) Kanamycin resistance",
      "D) Both ampicillin and tetracycline resistance"
    ],
    correctIndex: 1,
    explanation: "PvuI is located inside the ampR gene, so insertion at PvuI causes insertional inactivation of ampicillin resistance."
  },
  {
    id: 59,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "PCR",
    type: "Match",
    question: "Match List-I (PCR Step) with List-II (Event):\nList-I:\n(a) Denaturation\n(b) Annealing\n(c) Extension\nList-II:\n(i) Taq polymerase extends primers using dNTPs\n(ii) Separation of dsDNA into single strands at high temperature\n(iii) Binding of primers to complementary regions on template DNA",
    options: [
      "A) (a)-(ii), (b)-(iii), (c)-(i)",
      "B) (a)-(iii), (b)-(ii), (c)-(i)",
      "C) (a)-(ii), (b)-(i), (c)-(iii)",
      "D) (a)-(i), (b)-(iii), (c)-(ii)"
    ],
    correctIndex: 0,
    explanation: "Denaturation separates dsDNA; annealing binds primers to template DNA; extension synthesizes new DNA strands via Taq polymerase."
  },
  {
    id: 60,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Bioreactors",
    type: "Direct",
    question: "Which of the following is NOT an optimal growth condition provided by a bioreactor to achieve the desired product?",
    options: [
      "A) Temperature and pH",
      "B) Substrate, salts, and vitamins",
      "C) Oxygen",
      "D) Ethidium bromide"
    ],
    correctIndex: 3,
    explanation: "Bioreactors provide optimal temperature, pH, substrate, salts, vitamins, and oxygen—never ethidium bromide (which is a mutagenic DNA stain)."
  },

// --- BATCH 4: LOCOMOTION AND MOVEMENT (Q91 - Q120) ---
  {
    id: 91,
    chapter: "Locomotion and Movement",
    subtopic: "Types of Movement",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: All locomotions are movements, but all movements are not locomotions.\nStatement II: In Paramoecium, cilia help in the movement of food through cytopharynx and in locomotion as well.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 0,
    explanation: "Both statements are direct NCERT lines: locomotion is voluntary movement resulting in a change of place/location, and Paramoecium uses cilia for both feeding and locomotion."
  },
  {
    id: 92,
    chapter: "Locomotion and Movement",
    subtopic: "Types of Movement",
    type: "Match",
    question: "Match List-I (Type of movement in human body) with List-II (Example):\nList-I:\n(a) Amoeboid movement\n(b) Ciliary movement\n(c) Flagellar movement\n(d) Muscular movement\nList-II:\n(i) Swimming of spermatozoa\n(ii) Macrophages and leucocytes in blood\n(iii) Passage of ova through female reproductive tract\n(iv) Movement of limbs, jaws, and tongue",
    options: [
      "A) (a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
      "B) (a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
      "C) (a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)",
      "D) (a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)"
    ],
    correctIndex: 0,
    explanation: "NCERT examples: macrophages/leucocytes show amoeboid movement; trachea and female reproductive tract show ciliary movement; spermatozoa show flagellar movement; limbs/jaws/tongue show muscular movement."
  },
  {
    id: 93,
    chapter: "Locomotion and Movement",
    subtopic: "Types of Movement",
    type: "Direct",
    question: "Amoeboid movement in specialized cells like macrophages and leucocytes is effected by pseudopodia formed by streaming of protoplasm and involves cytoskeletal elements such as:",
    options: [
      "A) Microfilaments",
      "B) Cilia",
      "C) Flagella",
      "D) Myelin sheath"
    ],
    correctIndex: 0,
    explanation: "NCERT states that cytoskeletal elements like microfilaments are also involved in amoeboid movement."
  },
  {
    id: 94,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Direct",
    question: "Muscle is a specialized tissue of ______ origin, and about ______ per cent of the body weight of a human adult is contributed by muscles:",
    options: [
      "A) Ectodermal; 20–30%",
      "B) Mesodermal; 40–50%",
      "C) Endodermal; 40–50%",
      "D) Mesodermal; 60–70%"
    ],
    correctIndex: 1,
    explanation: "Muscles are mesodermal in origin and contribute about 40–50% of the body weight of a human adult."
  },
  {
    id: 95,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Multi-Statement",
    question: "Which of the following are special properties of muscular tissue mentioned in NCERT?\n(A) Excitability\n(B) Contractility\n(C) Extensibility\n(D) Elasticity\nChoose the correct option:",
    options: [
      "A) (A) and (B) only",
      "B) (A), (B), and (C) only",
      "C) (B), (C), and (D) only",
      "D) (A), (B), (C), and (D)"
    ],
    correctIndex: 3,
    explanation: "NCERT lists all four—excitability, contractility, extensibility, and elasticity—as special properties of muscles."
  },
  {
    id: 96,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Match",
    question: "Match List-I (Type of muscle) with List-II (Characteristics):\nList-I:\n(a) Skeletal muscles\n(b) Visceral muscles\n(c) Cardiac muscles\nList-II:\n(i) Non-striated, smooth appearance, involuntary, located in inner walls of hollow visceral organs\n(ii) Striated, voluntary, closely associated with skeletal components\n(iii) Striated, involuntary, branched, assembled in a branching pattern in the heart",
    options: [
      "A) (a)-(ii), (b)-(i), (c)-(iii)",
      "B) (a)-(i), (b)-(ii), (c)-(iii)",
      "C) (a)-(ii), (b)-(iii), (c)-(i)",
      "D) (a)-(iii), (b)-(i), (c)-(ii)"
    ],
    correctIndex: 0,
    explanation: "Skeletal muscles are striated and voluntary; visceral (smooth) muscles are non-striated and involuntary; cardiac muscles are striated, branched, and involuntary."
  },
  {
    id: 97,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Direct",
    question: "In a skeletal muscle, a number of muscle bundles (fascicles) are held together by a common collagenous connective tissue layer called:",
    options: [
      "A) Sarcolemma",
      "B) Fascia",
      "C) Sarcoplasm",
      "D) Myofibril"
    ],
    correctIndex: 1,
    explanation: "Each organized skeletal muscle is made of a number of muscle bundles or fascicles held together by a common collagenous connective tissue layer called fascia."
  },
  {
    id: 98,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: A skeletal muscle fibre is a syncitium as the sarcoplasm contains many nuclei.\nStatement II: The endoplasmic reticulum (sarcoplasmic reticulum) of muscle fibres is the storehouse of sodium ions.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 2,
    explanation: "Statement I is correct. Statement II is incorrect because the sarcoplasmic reticulum is the storehouse of CALCIUM ions (Ca2+), not sodium ions."
  },
  {
    id: 99,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Direct",
    question: "The functional unit of contraction in a myofibril, defined as the portion of the myofibril between two successive 'Z' lines, is called a:",
    options: [
      "A) Sarcomere",
      "B) Sarcolemma",
      "C) H-zone",
      "D) M-line"
    ],
    correctIndex: 0,
    explanation: "The portion of the myofibril between two successive Z-lines is considered the functional unit of contraction and is called a sarcomere."
  },
  {
    id: 100,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Direct",
    question: "In the centre of each 'I' (isotropic) band is an elastic fibre called the ______, which bisects it. The thin filaments are firmly attached to it:",
    options: [
      "A) M-line",
      "B) Z-line",
      "C) H-zone",
      "D) A-band"
    ],
    correctIndex: 1,
    explanation: "The Z-line is an elastic fibre in the centre of each I-band to which thin (actin) filaments are firmly attached."
  },
  {
    id: 101,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Direct",
    question: "The thick (myosin) filaments in the 'A' (anisotropic) band are held together in the middle of this band by a thin fibrous membrane called the:",
    options: [
      "A) Z-line",
      "B) M-line",
      "C) H-zone",
      "D) Fascia"
    ],
    correctIndex: 1,
    explanation: "Thick filaments in the A-band are held together in the middle by a thin fibrous membrane called the M-line."
  },
  {
    id: 102,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Direct",
    question: "In a resting state, the central part of the thick filament that is NOT overlapped by thin filaments is called the:",
    options: [
      "A) I-band",
      "B) Z-line",
      "C) H-zone",
      "D) A-band"
    ],
    correctIndex: 2,
    explanation: "The central part of the thick filament, not overlapped by thin filaments in the resting state, is called the H-zone."
  },
  {
    id: 103,
    chapter: "Locomotion and Movement",
    subtopic: "Contractile Proteins",
    type: "Direct",
    question: "Each actin (thin) filament is made of two 'F' (filamentous) actins helically wound to each other. Each 'F' actin is a polymer of monomeric:",
    options: [
      "A) Meromyosins",
      "B) 'G' (Globular) actins",
      "C) Troponins",
      "D) Tropomyosins"
    ],
    correctIndex: 1,
    explanation: "Each F-actin is a polymer of monomeric G (Globular) actins."
  },
  {
    id: 104,
    chapter: "Locomotion and Movement",
    subtopic: "Contractile Proteins",
    type: "Direct",
    question: "In the resting state, a subunit of ______ masks the active binding sites for myosin on the actin filaments:",
    options: [
      "A) Tropomyosin",
      "B) Troponin",
      "C) Meromyosin",
      "D) G-actin"
    ],
    correctIndex: 1,
    explanation: "NCERT explicitly states that in the resting state, a subunit of troponin masks the active binding sites for myosin on the actin filaments."
  },
  {
    id: 105,
    chapter: "Locomotion and Movement",
    subtopic: "Contractile Proteins",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: Each myosin (thick) filament is a polymerized protein made of many monomeric proteins called meromyosins.\nStatement II: Each meromyosin has two important parts: a globular head with a short arm (HMM) and a tail (LMM).",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 0,
    explanation: "Both statements are exact NCERT descriptions of myosin: HMM (Heavy Meromyosin) = globular head + short arm; LMM (Light Meromyosin) = tail."
  },
  {
    id: 106,
    chapter: "Locomotion and Movement",
    subtopic: "Contractile Proteins",
    type: "Direct",
    question: "The globular head of meromyosin (HMM) is an active ATPase enzyme and has binding sites for:",
    options: [
      "A) Calcium and troponin",
      "B) ATP and active sites for actin",
      "C) Tropomyosin and acetylcholine",
      "D) ADP and Z-line"
    ],
    correctIndex: 1,
    explanation: "The globular head is an active ATPase enzyme and has binding sites for ATP and active sites for actin."
  },
  {
    id: 107,
    chapter: "Locomotion and Movement",
    subtopic: "Contractile Proteins",
    type: "Direct",
    question: "The HMM component (head and short arm) projects outwards at regular distance and angle from each other from the surface of a polymerized myosin filament and is known as:",
    options: [
      "A) Cross arm",
      "B) Cross bridge",
      "C) Sarcomere",
      "D) Motor end plate"
    ],
    correctIndex: 0,
    explanation: "The outward-projecting HMM component (head + short arm) is called the cross arm; when it binds to actin, it forms a cross bridge."
  },
  {
    id: 108,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Direct",
    question: "Mechanism of muscle contraction is best explained by the sliding filament theory, which states that contraction of a muscle fibre takes place by the sliding of:",
    options: [
      "A) Thick filaments over thin filaments",
      "B) Thin filaments over thick filaments",
      "C) Z-lines over M-lines independently",
      "D) Troponin over tropomyosin"
    ],
    correctIndex: 1,
    explanation: "The sliding filament theory states that contraction takes place by the sliding of the THIN (actin) filaments over the THICK (myosin) filaments."
  },
  {
    id: 109,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Direct",
    question: "A motor neuron along with the muscle fibres connected to it constitutes a:",
    options: [
      "A) Motor end plate",
      "B) Motor unit",
      "C) Neuromuscular junction",
      "D) Sarcomere"
    ],
    correctIndex: 1,
    explanation: "A motor neuron along with the muscle fibres connected to it constitutes a motor unit. The junction between a motor neuron and the sarcolemma of the muscle fibre is the neuromuscular junction (motor-end plate)."
  },
  {
    id: 110,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Direct",
    question: "When a neural signal reaches the neuromuscular junction, it releases a neurotransmitter called ______, which generates an action potential in the sarcolemma:",
    options: [
      "A) Adrenaline",
      "B) Acetylcholine",
      "C) Dopamine",
      "D) Serotonin"
    ],
    correctIndex: 1,
    explanation: "Acetylcholine is released at the neuromuscular junction, generating an action potential in the sarcolemma that triggers Ca2+ release from the sarcoplasmic reticulum."
  },
  {
    id: 111,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Assertion-Reason",
    question: "Assertion (A): Increase in Ca2+ level in the sarcoplasm leads to the unmasking of active sites on actin filaments.\nReason (R): Calcium ions bind to a subunit of troponin on actin filaments and thereby remove the masking of active sites for myosin.",
    options: [
      "A) Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "B) Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "C) (A) is true but (R) is false",
      "D) (A) is false but (R) is true"
    ],
    correctIndex: 0,
    explanation: "Ca2+ binds to troponin, causing a conformational change that removes the masking of active sites on actin for myosin head binding."
  },
  {
    id: 112,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Direct",
    question: "During muscle contraction, what happens to the length of the A-band, I-band, and H-zone?",
    options: [
      "A) A-band shortens, I-band shortens, H-zone widens",
      "B) A-band remains unchanged, I-band shortens, H-zone narrows/disappears",
      "C) A-band widens, I-band remains unchanged, H-zone shortens",
      "D) All three bands remain unchanged in length"
    ],
    correctIndex: 1,
    explanation: "During shortening of the sarcomere, the I-bands get reduced and the H-zone narrows/disappears, whereas the A-bands retain their exact length."
  },
  {
    id: 113,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Direct",
    question: "During the cross-bridge cycle, what directly causes the breaking of the cross-bridge (detachment of myosin head from actin)?",
    options: [
      "A) Release of ADP and Pi",
      "B) Binding of a new ATP molecule to the myosin head",
      "C) Release of acetylcholine",
      "D) Binding of Ca2+ to troponin"
    ],
    correctIndex: 1,
    explanation: "After ADP and Pi are released, a new ATP binds to the myosin head, causing the cross-bridge to break."
  },
  {
    id: 114,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Direct",
    question: "How does a contracted muscle fibre return to its relaxed state?",
    options: [
      "A) Ca2+ ions are pumped back to the sarcoplasmic cisternae, masking actin sites and returning Z-lines to their original position",
      "B) Myosin filaments dissolve into meromyosins",
      "C) More acetylcholine is released at the motor end plate",
      "D) Lactic acid binds to troponin"
    ],
    correctIndex: 0,
    explanation: "Relaxation occurs when Ca2+ ions are actively pumped back into the sarcoplasmic cisternae, resulting in the masking of actin filaments and return of Z-lines to their original position."
  },
  {
    id: 115,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Direct",
    question: "Repeated activation of muscles can lead to muscle fatigue due to anaerobic breakdown of glycogen in them, causing the accumulation of:",
    options: [
      "A) Pyruvic acid",
      "B) Lactic acid",
      "C) Uric acid",
      "D) Citric acid"
    ],
    correctIndex: 1,
    explanation: "Anaerobic breakdown of glycogen during repeated muscle activation leads to the accumulation of lactic acid, causing muscle fatigue."
  },
  {
    id: 116,
    chapter: "Locomotion and Movement",
    subtopic: "Red vs White Muscle Fibres",
    type: "Direct",
    question: "The red-coloured oxygen-storing pigment present in high content in red muscle fibres is:",
    options: [
      "A) Haemoglobin",
      "B) Myoglobin",
      "C) Cytochrome",
      "D) Myosin"
    ],
    correctIndex: 1,
    explanation: "Myoglobin is the red-coloured oxygen-storing pigment found abundantly in red muscle fibres."
  },
  {
    id: 117,
    chapter: "Locomotion and Movement",
    subtopic: "Red vs White Muscle Fibres",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: Red muscle fibres contain plenty of mitochondria and are also called aerobic muscles.\nStatement II: White muscle fibres have very less myoglobin, fewer mitochondria, and a high amount of sarcoplasmic reticulum, depending on anaerobic processes for energy.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 0,
    explanation: "Both statements accurately summarize the NCERT comparison between red (aerobic) and white (anaerobic) muscle fibres."
  },
  {
    id: 118,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Multi-Statement",
    question: "Arrange the following events of muscle contraction in the correct chronological sequence:\n(A) Release of Ca2+ into sarcoplasm\n(B) Release of acetylcholine at neuromuscular junction\n(C) Binding of Ca2+ to troponin and unmasking of active sites on actin\n(D) Cross-bridge formation between myosin head and actin\n(E) Pulling of actin filaments towards the centre of A-band\nChoose the correct order:",
    options: [
      "A) (B) → (A) → (C) → (D) → (E)",
      "B) (A) → (B) → (C) → (D) → (E)",
      "C) (B) → (C) → (A) → (D) → (E)",
      "D) (C) → (B) → (A) → (E) → (D)"
    ],
    correctIndex: 0,
    explanation: "Signal triggers acetylcholine release (B) → action potential releases Ca2+ (A) → Ca2+ binds troponin (C) → cross-bridge forms (D) → actin slides toward center of A-band (E)."
  },
  {
    id: 119,
    chapter: "Locomotion and Movement",
    subtopic: "Types of Movement",
    type: "Direct",
    question: "In Hydra, tentacles are used for:",
    options: [
      "A) Capturing prey only",
      "B) Locomotion only",
      "C) Both capturing prey and locomotion",
      "D) Ciliary movement of food through cytopharynx"
    ],
    correctIndex: 2,
    explanation: "NCERT states that Hydra can use its tentacles for capturing its prey and also use them for locomotion."
  },
  {
    id: 120,
    chapter: "Locomotion and Movement",
    subtopic: "Contractile Proteins",
    type: "Direct",
    question: "Which two proteins run close to the 'F' actins throughout their length in a thin filament?",
    options: [
      "A) Two filaments of tropomyosin",
      "B) Two filaments of meromyosin",
      "C) Two filaments of troponin",
      "D) Two filaments of collagen"
    ],
    correctIndex: 0,
    explanation: "NCERT states that two filaments of another protein, tropomyosin, also run close to the 'F' actins throughout its length, while troponin is distributed at regular intervals on tropomyosin."
  },

// --- BATCH 3: BIOTECHNOLOGY: PRINCIPLES AND PROCESSES (Q61 - Q90) ---
  {
    id: 61,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Restriction Enzymes",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: Each restriction endonuclease functions by 'inspecting' the length of a DNA sequence.\nStatement II: Once it finds its specific recognition sequence, it binds to the DNA and cuts each of the two strands of the double helix at specific points in their sugar-phosphate backbones.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 0,
    explanation: "Both statements are direct NCERT lines describing how restriction endonucleases inspect DNA and cleave the sugar-phosphate backbones at specific recognition sites."
  },
  {
    id: 62,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Restriction Enzymes",
    type: "Direct",
    question: "In the naming convention of restriction enzymes, the Roman numbers following the names indicate:",
    options: [
      "A) The number of base pairs in the recognition sequence",
      "B) The order in which the enzymes were isolated from that strain of bacteria",
      "C) The number of cuts made by the enzyme in a plasmid",
      "D) The optimal pH required for enzyme activity"
    ],
    correctIndex: 1,
    explanation: "Roman numerals (e.g., I in EcoRI, II in Hind II) indicate the order in which the enzymes were isolated from that particular strain of bacteria."
  },
  {
    id: 63,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Restriction Enzymes",
    type: "Direct",
    question: "Which of the following statements about sticky ends is INCORRECT?",
    options: [
      "A) They are single-stranded overhanging stretches at the ends of cut DNA",
      "B) They form hydrogen bonds with their complementary cut counterparts",
      "C) Their stickiness facilitates the action of the enzyme DNA ligase",
      "D) They are formed only when DNA is cut at the exact center of the palindrome"
    ],
    correctIndex: 3,
    explanation: "Sticky ends are formed when restriction enzymes cut a little away from the center of the palindrome sites, between the same two bases on opposite strands (cutting at the exact center produces blunt ends)."
  },
  {
    id: 64,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Restriction Enzymes",
    type: "Direct",
    question: "A plasmid vector has 2 recognition sites for EcoRI. If this circular plasmid is completely digested with EcoRI, how many DNA fragments will be generated?",
    options: [
      "A) 1",
      "B) 2",
      "C) 3",
      "D) 4"
    ],
    correctIndex: 1,
    explanation: "For a circular DNA molecule (like a plasmid), n restriction sites yield n fragments. Thus, 2 EcoRI sites yield 2 fragments."
  },
  {
    id: 65,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Restriction Enzymes",
    type: "Direct",
    question: "A linear DNA molecule has 3 recognition sites for BamHI. Complete digestion with BamHI will produce how many DNA fragments?",
    options: [
      "A) 2",
      "B) 3",
      "C) 4",
      "D) 6"
    ],
    correctIndex: 2,
    explanation: "For a linear DNA molecule, n restriction sites yield (n + 1) fragments. Thus, 3 sites yield 4 fragments."
  },
  {
    id: 66,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Gel Electrophoresis",
    type: "Assertion-Reason",
    question: "Assertion (A): In agarose gel electrophoresis, DNA fragments move towards the anode.\nReason (R): DNA fragments are negatively charged molecules due to the presence of phosphate groups.",
    options: [
      "A) Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "B) Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "C) (A) is true but (R) is false",
      "D) (A) is false but (R) is true"
    ],
    correctIndex: 0,
    explanation: "Negatively charged DNA molecules migrate through the agarose matrix towards the positively charged anode under an electric field."
  },
  {
    id: 67,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Gel Electrophoresis",
    type: "Direct",
    question: "In an agarose gel electrophoresis run, Lane 1 contains undigested DNA and Lanes 2–4 contain digested DNA fragments. Which band is closest to the loading well?",
    options: [
      "A) The smallest DNA fragment",
      "B) The largest DNA fragment",
      "C) All fragments travel equally far",
      "D) The positively charged DNA fragment"
    ],
    correctIndex: 1,
    explanation: "Larger DNA fragments experience greater sieving resistance in the agarose gel and remain closest to the loading wells (cathode end), whereas smaller fragments move farthest toward the anode."
  },
  {
    id: 68,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Direct",
    question: "If one wants to recover many copies of the target DNA, it should be cloned in a vector whose:",
    options: [
      "A) Origin of replication (ori) supports a high copy number",
      "B) Selectable marker is inactivated",
      "C) Size is larger than the host chromosome",
      "D) Cloning site is absent"
    ],
    correctIndex: 0,
    explanation: "NCERT states that if one wants to recover many copies of the target DNA, it should be cloned in a vector whose origin supports high copy number."
  },
  {
    id: 69,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Multi-Statement",
    question: "Consider the following statements regarding the cloning vector pBR322:\n(A) It has two antibiotic resistance genes: ampR and tetR.\n(B) ClaI, EcoRI, and HindIII sites are located outside both ampR and tetR genes.\n(C) BamHI and SalI sites are located in the tetR gene.\n(D) PvuII site is located in the rop gene.\nWhich of the above statements are correct?",
    options: [
      "A) (A) and (C) only",
      "B) (A), (B), and (C) only",
      "C) (B), (C), and (D) only",
      "D) (A), (B), (C), and (D)"
    ],
    correctIndex: 3,
    explanation: "All four statements accurately match the NCERT diagram of E. coli cloning vector pBR322."
  },
  {
    id: 70,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Direct",
    question: "In pBR322, ligation of a foreign DNA at the SalI site will result in:",
    options: [
      "A) Loss of ampicillin resistance",
      "B) Loss of tetracycline resistance",
      "C) Loss of both ampicillin and tetracycline resistance",
      "D) Loss of origin of replication"
    ],
    correctIndex: 1,
    explanation: "SalI (along with BamHI) is located within the tetR gene; inserting foreign DNA at SalI causes insertional inactivation of tetracycline resistance."
  },
  {
    id: 71,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: Transformation is a procedure through which a piece of DNA is introduced in a host bacterium.\nStatement II: In blue-white screening, non-recombinant bacterial colonies appear blue in the presence of a chromogenic substrate.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 0,
    explanation: "Both statements are exact NCERT concepts: transformation introduces DNA into a host bacterium, and non-recombinants retain an intact β-galactosidase gene, producing blue colonies."
  },
  {
    id: 72,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Direct",
    question: "How has the tumor-inducing (Ti) plasmid of Agrobacterium tumefaciens been modified for use as a cloning vector in plants?",
    options: [
      "A) By removing its ability to deliver genes into plant cells",
      "B) By disarming it so it is no longer pathogenic to plants while retaining its ability to deliver genes of interest",
      "C) By adding ampicillin resistance genes to kill plant tumors",
      "D) By converting it into a retrovirus"
    ],
    correctIndex: 1,
    explanation: "The Ti plasmid has been modified (disarmed) into a cloning vector which is no more pathogenic to plants but is still able to use its mechanism to deliver genes of interest into a variety of plants."
  },
  {
    id: 73,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Competent Host",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: Recombinant DNA can be forced into competent bacterial cells by incubating them with rDNA on ice, followed by placing them briefly at 42°C, and then putting them back on ice.\nStatement II: Micro-injection is a method suitable for plants where cells are bombarded with high-velocity microparticles of gold or tungsten coated with DNA.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 2,
    explanation: "Statement I is correct. Statement II is incorrect because bombarding plant cells with gold/tungsten microparticles is BIOLISTICS (gene gun), whereas micro-injection is direct injection into an animal cell nucleus."
  },
  {
    id: 74,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Processes of rDNA Technology",
    type: "Direct",
    question: "Which of the following is the correct sequence of steps in Recombinant DNA Technology?",
    options: [
      "A) Isolation of DNA → Fragmentation by restriction enzymes → Isolation of desired DNA fragment → Ligation into vector → Transfer into host → Culturing host cells → Extraction of desired product",
      "B) Fragmentation of DNA → Isolation of DNA → PCR → Ligation → Transfer into host → Downstream processing",
      "C) Isolation of DNA → Ligation into vector → Fragmentation by restriction enzymes → Transfer into host → Culturing",
      "D) PCR → Isolation of DNA → Fragmentation → Transfer into host → Ligation into vector"
    ],
    correctIndex: 0,
    explanation: "NCERT lists the exact sequence: isolation of DNA, fragmentation by restriction endonucleases, isolation of desired DNA fragment, ligation into a vector, transferring rDNA into host, culturing host cells at large scale, and extraction of the desired product."
  },
  {
    id: 75,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Processes of rDNA Technology",
    type: "Direct",
    question: "To release DNA along with other macromolecules (RNA, proteins, polysaccharides, lipids) from a fungal cell, which enzyme is used to break open the cell wall?",
    options: [
      "A) Lysozyme",
      "B) Cellulase",
      "C) Chitinase",
      "D) Protease"
    ],
    correctIndex: 2,
    explanation: "Fungal cell walls are made of chitin, so chitinase is used to digest the cell wall and release DNA."
  },
  {
    id: 76,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Processes of rDNA Technology",
    type: "Direct",
    question: "Why must the DNA be in pure form, free from other macromolecules, before cutting it with restriction enzymes?",
    options: [
      "A) Because RNA and proteins inhibit DNA ligase only",
      "B) Because DNA is enclosed within membranes and intertwined with histones/RNA, which must be removed so restriction enzymes can act properly",
      "C) Because impure DNA is positively charged",
      "D) Because chilled ethanol only dissolves proteins"
    ],
    correctIndex: 1,
    explanation: "In order to cut DNA with restriction enzymes, it needs to be in pure form, free from other macromolecules like RNA, proteins (histones), polysaccharides, and lipids."
  },
  {
    id: 77,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "PCR",
    type: "Direct",
    question: "If you start with 1 double-stranded DNA molecule, how many DNA molecules will be present after 4 complete cycles of PCR?",
    options: [
      "A) 4",
      "B) 8",
      "C) 16",
      "D) 32"
    ],
    correctIndex: 2,
    explanation: "Number of DNA molecules after n cycles = 2^n. For n = 4, 2^4 = 16 molecules."
  },
  {
    id: 78,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "PCR",
    type: "Assertion-Reason",
    question: "Assertion (A): Normal DNA polymerase from E. coli cannot be used efficiently in automated PCR cycles.\nReason (R): High temperature required for denaturation of double-stranded DNA denatures normal DNA polymerase, whereas Taq polymerase remains thermostable.",
    options: [
      "A) Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "B) Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "C) (A) is true but (R) is false",
      "D) (A) is false but (R) is true"
    ],
    correctIndex: 0,
    explanation: "Taq polymerase (from Thermus aquaticus) remains active during the high-temperature denaturation step of PCR, unlike normal E. coli DNA polymerase."
  },
  {
    id: 79,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "PCR",
    type: "Direct",
    question: "In PCR, the enzyme DNA polymerase extends the primers using:",
    options: [
      "A) Ribonucleotides provided in the reaction and genomic DNA as template",
      "B) Deoxynucleotides (dNTPs) provided in the reaction and genomic DNA as template",
      "C) Amino acids provided in the reaction and mRNA as template",
      "D) Restriction enzymes and plasmid DNA"
    ],
    correctIndex: 1,
    explanation: "During extension, Taq DNA polymerase extends the primers using deoxynucleotides (dNTPs) provided in the reaction and the genomic DNA as template."
  },
  {
    id: 80,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Processes of rDNA Technology",
    type: "Direct",
    question: "When recombinant DNA bearing an ampicillin resistance gene is transferred into E. coli cells and spread on agar plates containing ampicillin:",
    options: [
      "A) Only untransformed recipient cells will grow",
      "B) Only transformed cells will grow, while untransformed recipient cells will die",
      "C) Both transformed and untransformed cells will grow equally",
      "D) Neither transformed nor untransformed cells will grow"
    ],
    correctIndex: 1,
    explanation: "Transformed E. coli cells become resistant to ampicillin and survive on ampicillin-containing agar plates, whereas untransformed cells die. Thus, the ampicillin resistance gene acts as a selectable marker."
  },
  {
    id: 81,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Bioreactors",
    type: "Match",
    question: "Match List-I (Bioreactor feature) with List-II (Function):\nList-I:\n(a) Curved base\n(b) Sparger\n(c) Sampling ports\n(d) Foam breaker\nList-II:\n(i) Withdraw small volumes of culture periodically\n(ii) Facilitate mixing of reactor contents\n(iii) Increase surface area for oxygen transfer via air bubbles\n(iv) Control foam formation during agitation",
    options: [
      "A) (a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)",
      "B) (a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)",
      "C) (a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)",
      "D) (a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)"
    ],
    correctIndex: 0,
    explanation: "Curved base aids mixing; sparger increases oxygen transfer surface area; sampling ports allow periodic culture withdrawal; foam breaker controls foam."
  },
  {
    id: 82,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Bioreactors",
    type: "Direct",
    question: "In a bioreactor, raw materials are biologically converted into specific products, individual enzymes, etc., using:",
    options: [
      "A) Microbial, plant, animal, or human cells",
      "B) Only bacterial cells",
      "C) Only plant cells",
      "D) Only synthetic chemical catalysts"
    ],
    correctIndex: 0,
    explanation: "NCERT defines bioreactors as vessels in which raw materials are biologically converted into specific products using microbial, plant, animal, or human cells."
  },
  {
    id: 83,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Downstream Processing",
    type: "Multi-Statement",
    question: "Which of the following are included under downstream processing?\n(A) Separation of the product\n(B) Purification of the product\n(C) Formulation with suitable preservatives\n(D) Strict quality control testing\nChoose the correct option:",
    options: [
      "A) (A) and (B) only",
      "B) (A), (B), and (C) only",
      "C) (B), (C), and (D) only",
      "D) (A), (B), (C), and (D)"
    ],
    correctIndex: 3,
    explanation: "NCERT states that after completion of the biosynthetic stage, the product undergoes separation and purification (collectively downstream processing), formulation with preservatives, clinical trials (for drugs), and strict quality control testing."
  },
  {
    id: 84,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Principles of Biotechnology",
    type: "Direct",
    question: "Which of the following is considered the 'molecular scissors' of genetic engineering?",
    options: [
      "A) DNA ligase",
      "B) Restriction endonucleases",
      "C) DNA polymerase",
      "D) Reverse transcriptase"
    ],
    correctIndex: 1,
    explanation: "Restriction enzymes are called 'molecular scissors' because they cut DNA at specific recognition locations."
  },
  {
    id: 85,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Direct",
    question: "Plasmids are:",
    options: [
      "A) Autonomously replicating circular extra-chromosomal DNA in bacteria",
      "B) Linear chromosomal DNA found in viruses",
      "C) Single-stranded RNA molecules in fungi",
      "D) Protein coats of bacteriophages"
    ],
    correctIndex: 0,
    explanation: "NCERT defines plasmids as autonomously replicating circular extra-chromosomal DNA."
  },
  {
    id: 86,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Restriction Enzymes",
    type: "Direct",
    question: "Hind II always cuts DNA molecules at a particular point by recognizing a specific sequence of how many base pairs?",
    options: [
      "A) 4 base pairs",
      "B) 6 base pairs",
      "C) 8 base pairs",
      "D) 10 base pairs"
    ],
    correctIndex: 1,
    explanation: "NCERT explicitly states that Hind II recognizes a specific sequence of 6 base pairs."
  },
  {
    id: 87,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Cloning Vectors",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: Normal E. coli cells naturally carry resistance against ampicillin, tetracycline, and kanamycin.\nStatement II: In pBR322, the presence of more than one recognition site for a restriction enzyme complicates gene cloning.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 3,
    explanation: "Statement I is incorrect because normal E. coli cells do NOT carry resistance against any of these antibiotics (which is why those genes work as selectable markers). Statement II is correct."
  },
  {
    id: 88,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Gel Electrophoresis",
    type: "Direct",
    question: "Agarose used in gel electrophoresis is extracted from:",
    options: [
      "A) Fungi",
      "B) Seaweeds (marine algae)",
      "C) Bacteria",
      "D) Bryophytes"
    ],
    correctIndex: 1,
    explanation: "Agarose is a natural polymer extracted from seaweeds."
  },
  {
    id: 89,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Processes of rDNA Technology",
    type: "Direct",
    question: "Small-scale laboratory culturing of cells harbouring cloned genes of interest produces:",
    options: [
      "A) Large industrial quantities of recombinant protein",
      "B) Only small yields of the desired recombinant protein",
      "C) Zero recombinant protein",
      "D) Only plasmid DNA without protein expression"
    ],
    correctIndex: 1,
    explanation: "Small-volume laboratory cultures cannot yield appreciable quantities of products; to produce in large quantities, bioreactors (100–1000 litres) are required."
  },
  {
    id: 90,
    chapter: "Biotechnology: Principles and Processes",
    subtopic: "Competent Host",
    type: "Direct",
    question: "Which of the following is a vector-less direct gene transfer method used specifically for animal cells?",
    options: [
      "A) Biolistics (Gene gun)",
      "B) Micro-injection",
      "C) Ti plasmid transfer",
      "D) Agrobacterium-mediated transfer"
    ],
    correctIndex: 1,
    explanation: "In micro-injection, recombinant DNA is directly injected into the nucleus of an animal cell without using a biological vector."
  },

// --- BATCH 6: LOCOMOTION AND MOVEMENT (Q151 - Q180) ---
  {
    id: 151,
    chapter: "Locomotion and Movement",
    subtopic: "Joints",
    type: "Direct",
    question: "Joints are points of contact between bones, or between bones and cartilages. In how many major structural forms are joints classified in NCERT?",
    options: [
      "A) Two (fibrous and synovial)",
      "B) Three (fibrous, cartilaginous, and synovial)",
      "C) Four (fibrous, cartilaginous, synovial, and muscular)",
      "D) Five (ball and socket, hinge, pivot, gliding, saddle)"
    ],
    correctIndex: 1,
    explanation: "NCERT classifies joints into three major structural forms: fibrous, cartilaginous, and synovial."
  },
  {
    id: 152,
    chapter: "Locomotion and Movement",
    subtopic: "Joints",
    type: "Direct",
    question: "Fibrous joints do NOT allow any movement. This type of joint is shown by the flat skull bones which fuse end-to-end with the help of dense fibrous connective tissues in the form of:",
    options: [
      "A) Synovial cavities",
      "B) Sutures",
      "C) Tendons",
      "D) Ligaments"
    ],
    correctIndex: 1,
    explanation: "Flat skull bones fuse end-to-end via dense fibrous connective tissues in the form of sutures to form the cranium."
  },
  {
    id: 153,
    chapter: "Locomotion and Movement",
    subtopic: "Joints",
    type: "Direct",
    question: "The joint between the adjacent vertebrae in the vertebral column is an example of a ______, and it permits ______:",
    options: [
      "A) Fibrous joint; no movement",
      "B) Cartilaginous joint; limited movements",
      "C) Synovial joint; considerable movement",
      "D) Gliding joint; free rotation"
    ],
    correctIndex: 1,
    explanation: "In cartilaginous joints, bones are joined together with the help of cartilages. The joint between adjacent vertebrae in the vertebral column is of this pattern and permits limited movements."
  },
  {
    id: 154,
    chapter: "Locomotion and Movement",
    subtopic: "Joints",
    type: "Direct",
    question: "Synovial joints are characterized by the presence of a fluid-filled ______ between the articulating surfaces of the two bones, allowing considerable movement:",
    options: [
      "A) Neural canal",
      "B) Synovial cavity",
      "C) Glenoid cavity",
      "D) Fibrous suture"
    ],
    correctIndex: 1,
    explanation: "Synovial joints are characterized by a fluid-filled synovial cavity between the articulating surfaces of the two bones."
  },
  {
    id: 155,
    chapter: "Locomotion and Movement",
    subtopic: "Joints",
    type: "Match",
    question: "Match List-I (Type of Synovial Joint) with List-II (NCERT Example):\nList-I:\n(a) Ball and socket joint\n(b) Hinge joint\n(c) Pivot joint\n(d) Gliding joint\n(e) Saddle joint\nList-II:\n(i) Between carpal and metacarpal of thumb\n(ii) Between atlas and axis\n(iii) Between humerus and pectoral girdle\n(iv) Knee joint\n(v) Between the carpals",
    options: [
      "A) (a)-(iii), (b)-(iv), (c)-(ii), (d)-(v), (e)-(i)",
      "B) (a)-(iii), (b)-(ii), (c)-(iv), (d)-(v), (e)-(i)",
      "C) (a)-(iv), (b)-(iii), (c)-(ii), (d)-(i), (e)-(v)",
      "D) (a)-(iii), (b)-(iv), (c)-(v), (d)-(ii), (e)-(i)"
    ],
    correctIndex: 0,
    explanation: "Exact NCERT examples: Ball & socket (humerus & pectoral girdle), Hinge (knee joint), Pivot (atlas & axis), Gliding (between carpals), Saddle (carpal & metacarpal of thumb)."
  },
  {
    id: 156,
    chapter: "Locomotion and Movement",
    subtopic: "Joints",
    type: "Direct",
    question: "Which type of synovial joint is present between the atlas and the axis?",
    options: [
      "A) Hinge joint",
      "B) Pivot joint",
      "C) Saddle joint",
      "D) Gliding joint"
    ],
    correctIndex: 1,
    explanation: "The joint between the atlas (1st cervical vertebra) and axis (2nd cervical vertebra) is a pivot joint."
  },
  {
    id: 157,
    chapter: "Locomotion and Movement",
    subtopic: "Joints",
    type: "Direct",
    question: "The joint between the carpal and metacarpal of the thumb is an example of:",
    options: [
      "A) Gliding joint",
      "B) Saddle joint",
      "C) Hinge joint",
      "D) Ball and socket joint"
    ],
    correctIndex: 1,
    explanation: "NCERT specifically gives the joint between carpal and metacarpal of thumb as the example of a saddle joint."
  },
  {
    id: 158,
    chapter: "Locomotion and Movement",
    subtopic: "Joints",
    type: "Direct",
    question: "The joint between the carpals is an example of:",
    options: [
      "A) Gliding joint",
      "B) Pivot joint",
      "C) Saddle joint",
      "D) Fibrous joint"
    ],
    correctIndex: 0,
    explanation: "The joint between the carpals is a gliding joint (a type of synovial joint)."
  },
  {
    id: 159,
    chapter: "Locomotion and Movement",
    subtopic: "Disorders",
    type: "Direct",
    question: "Myasthenia gravis is an autoimmune disorder affecting the ______, leading to fatigue, weakening, and paralysis of skeletal muscle:",
    options: [
      "A) Synovial cavity",
      "B) Neuromuscular junction",
      "C) Sarcoplasmic reticulum",
      "D) Bone marrow"
    ],
    correctIndex: 1,
    explanation: "NCERT defines myasthenia gravis as an autoimmune disorder affecting the neuromuscular junction, leading to fatigue, weakening, and paralysis of skeletal muscle."
  },
  {
    id: 160,
    chapter: "Locomotion and Movement",
    subtopic: "Disorders",
    type: "Direct",
    question: "Progressive degeneration of skeletal muscle mostly due to a genetic disorder is called:",
    options: [
      "A) Myasthenia gravis",
      "B) Muscular dystrophy",
      "C) Tetany",
      "D) Osteoporosis"
    ],
    correctIndex: 1,
    explanation: "Muscular dystrophy is the progressive degeneration of skeletal muscle mostly due to a genetic disorder."
  },
  {
    id: 161,
    chapter: "Locomotion and Movement",
    subtopic: "Disorders",
    type: "Direct",
    question: "Rapid spasms (wild contractions) in muscle due to low Ca2+ in body fluid is known as:",
    options: [
      "A) Arthritis",
      "B) Tetany",
      "C) Gout",
      "D) Muscular dystrophy"
    ],
    correctIndex: 1,
    explanation: "Tetany is characterized by rapid spasms (wild contractions) in muscle due to low Ca2+ in body fluid."
  },
  {
    id: 162,
    chapter: "Locomotion and Movement",
    subtopic: "Disorders",
    type: "Direct",
    question: "Osteoporosis is an age-related disorder characterized by decreased bone mass and increased chances of fractures. A common cause of osteoporosis is:",
    options: [
      "A) Accumulation of uric acid crystals",
      "B) Decreased levels of estrogen",
      "C) Autoimmune attack on neuromuscular junction",
      "D) Excess calcium in body fluids"
    ],
    correctIndex: 1,
    explanation: "NCERT explicitly states that decreased levels of estrogen is a common cause of osteoporosis."
  },
  {
    id: 163,
    chapter: "Locomotion and Movement",
    subtopic: "Disorders",
    type: "Direct",
    question: "Inflammation of joints due to accumulation of uric acid crystals is called:",
    options: [
      "A) Osteoporosis",
      "B) Gout",
      "C) Tetany",
      "D) Myasthenia gravis"
    ],
    correctIndex: 1,
    explanation: "Gout is the inflammation of joints caused by the accumulation of uric acid crystals."
  },
  {
    id: 164,
    chapter: "Locomotion and Movement",
    subtopic: "Disorders",
    type: "Match",
    question: "Match List-I (Disorder) with List-II (Cause / Feature):\nList-I:\n(a) Myasthenia gravis\n(b) Muscular dystrophy\n(c) Tetany\n(d) Gout\nList-II:\n(i) Accumulation of uric acid crystals in joints\n(ii) Autoimmune disorder affecting neuromuscular junction\n(iii) Low Ca2+ in body fluid causing rapid spasms\n(iv) Genetic disorder causing progressive degeneration of skeletal muscle",
    options: [
      "A) (a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)",
      "B) (a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)",
      "C) (a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)",
      "D) (a)-(i), (b)-(iv), (c)-(iii), (d)-(ii)"
    ],
    correctIndex: 0,
    explanation: "Myasthenia gravis = autoimmune (NMJ); Muscular dystrophy = genetic degeneration; Tetany = low Ca2+ spasms; Gout = uric acid crystals."
  },
  {
    id: 165,
    chapter: "Locomotion and Movement",
    subtopic: "Disorders",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: Arthritis is the inflammation of joints.\nStatement II: Osteoporosis is caused by high levels of estrogen in elderly individuals.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 2,
    explanation: "Statement I is correct. Statement II is incorrect because osteoporosis is commonly caused by DECREASED (not high) levels of estrogen."
  },
  {
    id: 166,
    chapter: "Locomotion and Movement",
    subtopic: "Joints",
    type: "Assertion-Reason",
    question: "Assertion (A): Joints act as fulcrums during movement of body parts.\nReason (R): Force generated by the muscle is used to carry out movement through joints.",
    options: [
      "A) Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "B) Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "C) (A) is true but (R) is false",
      "D) (A) is false but (R) is true"
    ],
    correctIndex: 0,
    explanation: "NCERT states that force generated by the muscle is used to carry out movement through joints, where the joint acts as a fulcrum."
  },
  {
    id: 167,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Direct",
    question: "Which of the following correctly describes the light and dark bands of a myofibril?",
    options: [
      "A) Light band (I-band) contains actin; Dark band (A-band) contains myosin",
      "B) Light band (A-band) contains myosin; Dark band (I-band) contains actin",
      "C) Both A-band and I-band contain only actin",
      "D) Light band (I-band) contains myosin; Dark band (A-band) contains only actin"
    ],
    correctIndex: 0,
    explanation: "The light band contains actin and is called the I-band (Isotropic band), whereas the dark band called the A-band (Anisotropic band) contains myosin."
  },
  {
    id: 168,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: During muscle contraction, the Z-lines attached to the actins are pulled inwards, causing shortening of the sarcomere.\nStatement II: During muscle contraction, the thick myosin filaments shorten in length.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 2,
    explanation: "Statement I is correct. Statement II is incorrect because neither actin nor myosin filaments shorten; they slide over each other, and the A-band retains its length."
  },
  {
    id: 169,
    chapter: "Locomotion and Movement",
    subtopic: "Axial Skeleton",
    type: "Direct",
    question: "How many pairs of ribs are present in the human body?",
    options: [
      "A) 10 pairs",
      "B) 12 pairs",
      "C) 14 pairs",
      "D) 24 pairs"
    ],
    correctIndex: 1,
    explanation: "There are 12 pairs of ribs (24 individual ribs) in the human body."
  },
  {
    id: 170,
    chapter: "Locomotion and Movement",
    subtopic: "Axial Skeleton",
    type: "Direct",
    question: "Which of the following is NOT a function of the vertebral column mentioned in NCERT?",
    options: [
      "A) Protects the spinal cord",
      "B) Supports the head",
      "C) Serves as the point of attachment for the ribs and musculature of the back",
      "D) Articulates directly with the humerus to form the shoulder joint"
    ],
    correctIndex: 3,
    explanation: "The humerus articulates with the glenoid cavity of the scapula (pectoral girdle), not the vertebral column."
  },
  {
    id: 171,
    chapter: "Locomotion and Movement",
    subtopic: "Appendicular Skeleton",
    type: "Direct",
    question: "Identify the bones of the hindlimb (leg) from the following list:",
    options: [
      "A) Humerus, radius, ulna, carpals, metacarpals, phalanges",
      "B) Femur, tibia, fibula, patella, tarsals, metatarsals, phalanges",
      "C) Femur, radius, ulna, tarsals, metatarsals, phalanges",
      "D) Humerus, tibia, fibula, patella, carpals, metacarpals"
    ],
    correctIndex: 1,
    explanation: "Each hindlimb consists of femur (1), tibia (1), fibula (1), patella (1), tarsals (7), metatarsals (5), and phalanges (14) = 30 bones."
  },
  {
    id: 172,
    chapter: "Locomotion and Movement",
    subtopic: "Muscle Structure",
    type: "Direct",
    question: "Visceral muscles are located in the inner walls of hollow visceral organs like the alimentary canal and reproductive tract. They are also called:",
    options: [
      "A) Striated and voluntary muscles",
      "B) Smooth (non-striated) and involuntary muscles",
      "C) Cardiac and involuntary muscles",
      "D) Skeletal and involuntary muscles"
    ],
    correctIndex: 1,
    explanation: "Visceral muscles do not exhibit any striation and are smooth in appearance (hence smooth/non-striated muscles), and their activities are involuntary."
  },
  {
    id: 173,
    chapter: "Locomotion and Movement",
    subtopic: "Types of Movement",
    type: "Direct",
    question: "Ciliary movement occurs in most of our internal tubular organs lined by ciliated epithelium. The coordinated movements of cilia in the ______ help us in removing dust particles and foreign substances inhaled along with atmospheric air:",
    options: [
      "A) Alimentary canal",
      "B) Trachea",
      "C) Ureter",
      "D) Blood vessels"
    ],
    correctIndex: 1,
    explanation: "Coordinated movements of cilia in the trachea help remove dust particles and foreign substances inhaled with atmospheric air."
  },
  {
    id: 174,
    chapter: "Locomotion and Movement",
    subtopic: "Types of Movement",
    type: "Direct",
    question: "Flagellar movement in eukaryotes helps in all of the following EXCEPT:",
    options: [
      "A) Swimming of human spermatozoa",
      "B) Maintenance of water current in the canal system of sponges",
      "C) Locomotion of protozoans like Euglena",
      "D) Movement of macrophages in human blood"
    ],
    correctIndex: 3,
    explanation: "Macrophages and leucocytes in blood exhibit amoeboid movement (not flagellar movement). The other three are exact NCERT examples of flagellar movement."
  },
  {
    id: 175,
    chapter: "Locomotion and Movement",
    subtopic: "Joints",
    type: "Multi-Statement",
    question: "Select the CORRECT statements regarding human joints:\n(A) Fibrous joints are present between flat skull bones.\n(B) Cartilaginous joints allow considerable free movement.\n(C) Synovial joints have a fluid-filled synovial cavity.\n(D) Knee joint is a hinge joint.\nChoose the correct option:",
    options: [
      "A) (A), (C), and (D) only",
      "B) (A), (B), and (C) only",
      "C) (B) and (D) only",
      "D) (A), (B), (C), and (D)"
    ],
    correctIndex: 0,
    explanation: "(B) is incorrect because cartilaginous joints permit only LIMITED movements (synovial joints allow considerable movement)."
  },
  {
    id: 176,
    chapter: "Locomotion and Movement",
    subtopic: "Disorders",
    type: "Assertion-Reason",
    question: "Assertion (A): Tetany causes rapid spasms (wild contractions) in muscles.\nReason (R): Low Ca2+ levels in body fluid increase the excitability of nerves and muscles, leading to wild contractions.",
    options: [
      "A) Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "B) Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "C) (A) is true but (R) is false",
      "D) (A) is false but (R) is true"
    ],
    correctIndex: 0,
    explanation: "Low Ca2+ in body fluid is the direct cause of rapid spasms (wild contractions) in tetany."
  },
  {
    id: 177,
    chapter: "Locomotion and Movement",
    subtopic: "Red vs White Muscle Fibres",
    type: "Direct",
    question: "Which type of muscle fibre has a HIGH amount of sarcoplasmic reticulum and depends primarily on anaerobic processes for energy?",
    options: [
      "A) Red muscle fibres",
      "B) White muscle fibres",
      "C) Cardiac muscle fibres",
      "D) Smooth muscle fibres"
    ],
    correctIndex: 1,
    explanation: "White muscle fibres have very less myoglobin, fewer mitochondria, and a HIGH amount of sarcoplasmic reticulum, relying on anaerobic processes for energy."
  },
  {
    id: 178,
    chapter: "Locomotion and Movement",
    subtopic: "Axial Skeleton",
    type: "Direct",
    question: "Total number of bones in the human skull (including cranial bones, facial bones, ear ossicles, and hyoid) is:",
    options: [
      "A) 22",
      "B) 26",
      "C) 29",
      "D) 30"
    ],
    correctIndex: 2,
    explanation: "Cranial (8) + Facial (14) + Ear ossicles (6) + Hyoid (1) = 29 bones in the skull region (out of 80 axial bones: 29 + 26 vertebrae + 1 sternum + 24 ribs = 80)."
  },
  {
    id: 179,
    chapter: "Locomotion and Movement",
    subtopic: "Mechanism of Muscle Contraction",
    type: "Direct",
    question: "The energy required for the myosin head to bind to the exposed active sites on actin to form a cross-bridge comes from:",
    options: [
      "A) Hydrolysis of ATP",
      "B) Synthesis of lactic acid",
      "C) Breakdown of acetylcholine",
      "D) Oxidation of myoglobin"
    ],
    correctIndex: 0,
    explanation: "Utilizing the energy from ATP hydrolysis, the myosin head binds to the exposed active sites on actin to form a cross-bridge."
  },
  {
    id: 180,
    chapter: "Locomotion and Movement",
    subtopic: "Appendicular Skeleton",
    type: "Statement-Based",
    question: "Given below are two statements:\nStatement I: The glenoid cavity of the scapula articulates with the head of the femur.\nStatement II: The acetabulum of the coxal bone articulates with the head of the humerus.",
    options: [
      "A) Both Statement I and Statement II are correct",
      "B) Both Statement I and Statement II are incorrect",
      "C) Statement I is correct but Statement II is incorrect",
      "D) Statement I is incorrect but Statement II is correct"
    ],
    correctIndex: 1,
    explanation: "Both statements are swapped (classic NEET trap): the glenoid cavity articulates with the HUMERUS (shoulder joint), and the acetabulum articulates with the FEMUR (hip joint)."
  }

];

export const questions = (full.length ? full : sampleQuestions)
  .slice()
  .sort((a, b) => a.id - b.id);
