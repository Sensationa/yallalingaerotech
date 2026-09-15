export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  description: string;
  excerpt: string;
  readingTime: string;
  keywords: string;
  sections: BlogSection[];
  takeaways: string[];
  sources: { label: string; url: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "avionics-software-engineering",
    category: "Avionics",
    title: "What Avionics Software Engineering Involves",
    description: "An avionics software engineer’s overview of embedded development, requirements, verification, and assurance for airborne software.",
    excerpt: "A practical introduction to how embedded development, requirements, testing, and assurance fit together in airborne software.",
    readingTime: "5 min read",
    keywords: "avionics software engineer, avionics software development, embedded avionics, airborne software",
    sections: [
      { heading: "Software as part of an airborne system", paragraphs: ["Avionics software is developed as part of a larger airborne system. Its behavior is shaped by system requirements, hardware interfaces, safety considerations, and the evidence needed to show that the implementation satisfies its intended requirements.", "This makes the work broader than writing code. Engineers move between requirements, design, implementation, integration, verification results, problem reports, and controlled software baselines."] },
      { heading: "A requirements-led workflow", paragraphs: ["A dependable workflow starts with requirements that are clear enough to implement and verify. Design and source code should preserve the intent of those requirements, while traceability connects the lifecycle data in both directions."], bullets: ["Understand the system and software requirements.", "Develop architecture, detailed design, and source code.", "Integrate software with its target environment.", "Verify outputs and retain review or test evidence.", "Control changes through configuration management and quality processes."] },
      { heading: "Where embedded engineering meets assurance", paragraphs: ["Avionics teams need implementation skills and disciplined assurance practices. Languages such as C, Embedded C, and Ada support implementation, while reviews, analysis, and tests provide evidence about correctness.", "FAA AC 20-115D recognizes DO-178C as an acceptable means—but not the only means—of showing compliance for the software aspects of airborne systems and equipment. The applicable certification approach belongs to the project and its certification authorities, not to a programming language alone."] },
      { heading: "My professional context", paragraphs: ["My current work is in avionics embedded software development and Verification & Validation using C, Embedded C, and Ada, with exposure to DO-178C practices, LDRA, and Polyspace. This article stays at the public process level and does not discuss confidential project design details."] },
    ],
    takeaways: ["Avionics software is part of a system and assurance lifecycle.", "Requirements, implementation, verification, and controlled evidence are closely connected.", "Coding skill and verification discipline are both central to the role."],
    sources: [{ label: "FAA AC 20-115D — Airborne Software Development Assurance", url: "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-115D.pdf" }, { label: "NASA Software Engineering Handbook", url: "https://swehb.nasa.gov/display/SWEHBVC" }],
  },
  {
    slug: "do-178c-software-lifecycle",
    category: "DO-178C",
    title: "DO-178C Software Lifecycle: A Practical Overview",
    description: "A concise guide to DO-178C planning, development, verification, configuration management, quality assurance, and certification liaison.",
    excerpt: "See how planning, development, verification, configuration management, and quality assurance connect across the DO-178C lifecycle.",
    readingTime: "7 min read",
    keywords: "DO-178C, DO-178C software lifecycle, DO-178C verification, airborne software certification",
    sections: [
      { heading: "What DO-178C is", paragraphs: ["DO-178C is titled Software Considerations in Airborne Systems and Equipment Certification. FAA AC 20-115D recognizes it as an acceptable means of showing compliance with applicable airworthiness regulations for the software aspects of airborne systems and equipment.", "The advisory circular also makes an important distinction: it is not itself a regulation, and it is not the only possible means of compliance. A real project’s certification basis and agreed plans determine how the guidance is applied."] },
      { heading: "Lifecycle processes work together", paragraphs: ["The lifecycle is easier to understand as a connected evidence system rather than a simple code-then-test sequence."], bullets: ["Planning defines the lifecycle, standards, methods, environments, and evidence strategy.", "Development covers requirements, design, coding, and integration activities.", "Verification evaluates lifecycle outputs through reviews, analyses, and tests.", "Configuration management identifies and controls software lifecycle data and changes.", "Quality assurance assesses whether the approved processes are followed.", "Certification liaison coordinates the software evidence used in the approval process."] },
      { heading: "Objectives and software level", paragraphs: ["The assurance objectives applied to a project depend in part on the software level associated with the system safety assessment. Higher-criticality software demands additional rigor and evidence. This is why a generic checklist cannot replace project plans, system safety inputs, and certification authority coordination."] },
      { heading: "Traceability and verification evidence", paragraphs: ["Traceability helps demonstrate that requirements are implemented and verified, and that implementation has an authorized purpose. Reviews, analyses, test procedures, results, structural coverage information where applicable, and resolution of anomalies contribute to the verification record.", "Tools can support these activities, but a tool output is not assurance by itself. Teams still need defined objectives, suitable methods, reviewable results, and controlled evidence."] },
    ],
    takeaways: ["DO-178C is objective-oriented and applied through project-specific plans.", "Development and integral processes operate throughout the lifecycle.", "Traceability and reviewable verification evidence connect requirements to implementation."],
    sources: [{ label: "FAA AC 20-115D — Airborne Software Development Assurance", url: "https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-115D.pdf" }, { label: "FAA Order 8110.49A — Software Approval Guidelines", url: "https://www.faa.gov/documentLibrary/media/Order/FAA_Order_8110.49A.pdf" }, { label: "FAA DO-178B/C Differences Tool", url: "https://www.faa.gov/sites/faa.gov/files/aircraft/air_cert/design_approvals/air_software/differences_tool.pdf" }],
  },
  {
    slug: "embedded-c-avionics",
    category: "Embedded C",
    title: "Embedded C Practices for Reliable Avionics Software",
    description: "Explore Embedded C practices that support understandable, analyzable, and verifiable avionics software without oversimplifying safety assurance.",
    excerpt: "Practical coding, review, static-analysis, and traceability habits that make Embedded C easier to verify in avionics environments.",
    readingTime: "6 min read",
    keywords: "embedded C, embedded C programming, avionics embedded software, reliable C software",
    sections: [
      { heading: "Reliability starts before coding", paragraphs: ["Reliable Embedded C begins with clear requirements, architecture, interfaces, and constraints. Source code cannot compensate for an ambiguous requirement or an undefined hardware interaction.", "The goal is not clever code. The goal is behavior that engineers can understand, review, analyze, test, and maintain with confidence."] },
      { heading: "Keep behavior explicit", paragraphs: ["C gives developers close control over memory and hardware, but it also includes language behaviors that can be undefined, implementation-defined, or easy to misuse. Coding standards and constrained language subsets help teams avoid risky constructs and make intent more consistent."], bullets: ["Use explicit types and conversions where the design requires them.", "Control array bounds, pointer use, arithmetic ranges, and initialization.", "Keep control flow straightforward and reviewable.", "Make interfaces and side effects visible.", "Treat compiler warnings and analysis findings through a defined process."] },
      { heading: "Use complementary verification methods", paragraphs: ["Reviews can find requirement or design mismatches that tests may not reveal. Static analysis can inspect properties without executing the program. Dynamic tests then exercise implemented behavior with defined inputs and expected results.", "These methods are complementary. A clean static-analysis report does not prove that the software satisfies its requirements, and passing tests do not remove the need to understand the code and its interfaces."] },
      { heading: "Connect code to lifecycle evidence", paragraphs: ["In an avionics context, coding practices matter because they support wider assurance objectives. Requirements traceability, configuration control, review records, test evidence, and resolved findings make the implementation auditable and repeatable.", "In my professional work, LDRA and Polyspace support static analysis and code-verification activities alongside C, Embedded C, Ada, and DO-178C practices. Specific project implementation details remain confidential."] },
    ],
    takeaways: ["Prefer explicit, reviewable behavior over compact or clever code.", "Combine reviews, static analysis, and dynamic testing.", "Treat source code as one controlled part of a larger assurance record."],
    sources: [{ label: "NASA SWE-061 — Coding Standards", url: "https://swehb.nasa.gov/spaces/7150/pages/16450283/SWE-061+-+Coding+Standards" }, { label: "SEI CERT C Coding Standard", url: "https://www.sei.cmu.edu/library/sei-cert-c-coding-standard-rules-for-developing-safe-reliable-and-secure-systems-2016-edition/" }, { label: "MISRA C", url: "https://misra.org.uk/product/misra-c2012/" }],
  },
  {
    slug: "verification-validation-avionics",
    category: "V&V",
    title: "Verification and Validation in Avionics Software",
    description: "Learn how verification and validation build confidence in avionics software through requirements, reviews, analysis, testing, and evidence.",
    excerpt: "How requirements, reviews, static analysis, tests, and traceability work together to build confidence in avionics software.",
    readingTime: "6 min read",
    keywords: "verification and validation in avionics, avionics software testing, DO-178C verification, software V&V",
    sections: [
      { heading: "Two related questions", paragraphs: ["Verification asks whether lifecycle outputs satisfy their specified requirements and standards. Validation asks whether the requirements and resulting system address the intended use and stakeholder needs. The exact terminology and activities should always follow the project’s approved plans and applicable guidance.", "Together, these perspectives help teams avoid two different failures: implementing a requirement incorrectly, and correctly implementing a requirement that does not express the needed behavior."] },
      { heading: "Verification is broader than testing", paragraphs: ["Testing is essential, but verification also includes reviews and analyses of requirements, design, source code, procedures, results, and other lifecycle data."], bullets: ["Review requirements for accuracy, consistency, verifiability, and traceability.", "Review design and code against their standards and upstream requirements.", "Use static analysis to identify relevant code-quality and runtime concerns.", "Run requirement-based tests with controlled expected results.", "Record anomalies, decisions, corrections, and regression evidence."] },
      { heading: "Independence and objective evidence", paragraphs: ["The required degree of verification independence depends on the applicable assurance objectives and project context. Independence is not simply a job title; it concerns how an activity is performed and reviewed.", "NASA describes software assurance as rigorous analysis and testing used to provide objective evidence and independent assessment of critical products and processes throughout the lifecycle. The FAA’s software approval guidance similarly frames reviews around evidence and compliance for airborne software."] },
      { heading: "Tools support—not replace—the process", paragraphs: ["Tools such as LDRA and Polyspace can support static analysis, code verification, and reporting. Their results need engineering interpretation, appropriate review, and connection to planned objectives. The assurance argument comes from the controlled lifecycle and its evidence, not from a dashboard score alone."] },
    ],
    takeaways: ["Verification includes reviews and analyses as well as tests.", "Validation keeps the work connected to intended needs.", "Objective, traceable, controlled evidence is central to software assurance."],
    sources: [{ label: "FAA Order 8110.49A — Software Approval Guidelines", url: "https://www.faa.gov/documentLibrary/media/Order/FAA_Order_8110.49A.pdf" }, { label: "NASA Software Assurance and Software Safety", url: "https://sma.nasa.gov/sma-disciplines/software-assurance-and-software-safety" }, { label: "NASA Flight Software Qualification Guidance", url: "https://swehb.nasa.gov/display/SWEHBVB/7.12+-+Qualification+of+Flight+Software" }],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}