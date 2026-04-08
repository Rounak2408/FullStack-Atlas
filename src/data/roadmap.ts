export type RoadmapStage = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  progress: number;
  modules: number;
  duration: string;
  docs: {
    overview: string;
    bullets: string[];
    code: string;
    note: string;
    tip: string;
    warning: string;
  };
};

export const roadmapStages: RoadmapStage[] = [
  {
    id: "beginner",
    title: "Beginner",
    level: "Beginner",
    progress: 82,
    modules: 8,
    duration: "2 weeks",
    docs: {
      overview: "Build the mental model for web fundamentals and developer workflow.",
      bullets: ["HTTP basics", "Semantic HTML", "Git + GitHub flow", "Developer tooling"],
      code: "git checkout -b learning/fundamentals\nnpm run dev",
      note: "Consistency beats intensity. Study daily for 60 minutes.",
      tip: "Create a one-page cheat sheet after each module.",
      warning: "Do not jump to frameworks before understanding browser basics.",
    },
  },
  {
    id: "frontend",
    title: "Frontend",
    level: "Intermediate",
    progress: 64,
    modules: 14,
    duration: "5 weeks",
    docs: {
      overview: "Master modern UI engineering with React, state patterns, and design systems.",
      bullets: ["React architecture", "Type-safe components", "State management", "Performance"],
      code: "function Button({ children }: { children: React.ReactNode }) {\n  return <button className=\"rounded-md\">{children}</button>\n}",
      note: "Ship small UI components before full pages.",
      tip: "Track Core Web Vitals from the beginning.",
      warning: "Avoid over-abstraction in early iterations.",
    },
  },
  {
    id: "backend",
    title: "Backend",
    level: "Intermediate",
    progress: 48,
    modules: 12,
    duration: "4 weeks",
    docs: {
      overview: "Design robust APIs, authentication, and reliable server-side architecture.",
      bullets: ["REST conventions", "Auth and sessions", "Validation", "Error handling"],
      code: "app.get('/api/health', (_, res) => res.json({ ok: true }))",
      note: "Define API contracts before implementing handlers.",
      tip: "Use centralized logging and request ids.",
      warning: "Never ship without rate limits and input validation.",
    },
  },
  {
    id: "database",
    title: "Database",
    level: "Intermediate",
    progress: 35,
    modules: 9,
    duration: "3 weeks",
    docs: {
      overview: "Model data correctly and optimize queries for production scenarios.",
      bullets: ["Data modeling", "Indexes", "Migrations", "Transactions"],
      code: "CREATE INDEX idx_users_email ON users(email);",
      note: "Model for real queries, not hypothetical ones.",
      tip: "Keep migration files small and reversible.",
      warning: "Missing indexes can destroy user experience under load.",
    },
  },
  {
    id: "devops",
    title: "DevOps",
    level: "Advanced",
    progress: 21,
    modules: 10,
    duration: "3 weeks",
    docs: {
      overview: "Automate delivery with CI/CD, containers, observability, and scaling.",
      bullets: ["Docker basics", "Deployment pipelines", "Monitoring", "Security hardening"],
      code: "docker build -t fullstack-atlas .\ndocker run -p 3000:3000 fullstack-atlas",
      note: "Treat infrastructure changes like code changes.",
      tip: "Start with one golden deployment path.",
      warning: "Manual deployments do not scale with teams.",
    },
  },
  {
    id: "advanced",
    title: "Advanced",
    level: "Advanced",
    progress: 7,
    modules: 11,
    duration: "4 weeks",
    docs: {
      overview: "Evolve into senior-level execution with system design and product judgment.",
      bullets: ["System design", "Trade-off analysis", "Leadership", "Mentoring"],
      code: "type Decision = { option: string; tradeoffs: string[]; risk: 'low' | 'medium' | 'high' }",
      note: "Architecture is a product decision, not only a code decision.",
      tip: "Write architecture notes before major changes.",
      warning: "Premature scale optimization creates needless complexity.",
    },
  },
];
