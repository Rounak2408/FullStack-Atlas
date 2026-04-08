import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Flame,
  LayoutDashboard,
  Menu,
  Search,
  Target,
  Trophy,
  X,
} from "lucide-react";
import { roadmapStages } from "../data/roadmap";
import { useIsMobile } from "../hooks/use-is-mobile";
import { useReadingProgress } from "../hooks/use-reading-progress";
import { Card, Badge, Button, Input } from "../components/ui/primitives";

type ActiveTab = "overview" | "docs" | "modules";

export function HomePage() {
  const [activeStageId, setActiveStageId] = useState(roadmapStages[0].id);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const readingProgress = useReadingProgress();

  const activeStage = useMemo(
    () => roadmapStages.find((stage) => stage.id === activeStageId) ?? roadmapStages[0],
    [activeStageId],
  );

  const filteredStages = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return roadmapStages;
    return roadmapStages.filter((stage) =>
      [stage.title, stage.level, stage.docs.overview, ...stage.docs.bullets].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed left-0 top-0 z-[60] h-1 bg-cyan-400 transition-all" style={{ width: `${readingProgress}%` }} />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center gap-4 px-4 lg:px-8">
          <button className="lg:hidden" onClick={() => setSidebarOpen((v) => !v)}>
            {sidebarOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <div className="flex items-center gap-2 font-semibold">
            <div className="size-2 rounded-full bg-cyan-400 shadow-[0_0_24px_4px_rgba(34,211,238,0.55)]" />
            FullStack Atlas
          </div>
          <div className="ml-auto hidden w-80 lg:block">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-3.5 size-4 text-slate-400" />
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search modules, roadmap, docs..." className="pl-9" />
            </div>
          </div>
        </div>
      </header>

      {isMobile && (
        <div className="mx-4 mt-4 rounded-xl border border-amber-300/20 bg-amber-300/10 p-3 text-sm text-amber-100 lg:hidden">
          For best experience, open in desktop. You can continue on mobile.
        </div>
      )}

      <main className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[260px_1fr_280px] lg:px-8">
        <aside className={`${sidebarOpen ? "block" : "hidden"} lg:block`}>
          <Card className="sticky top-24 p-4">
            <div className="mb-4 text-xs uppercase tracking-[0.15em] text-slate-400">Roadmap Stages</div>
            <div className="space-y-2">
              {filteredStages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => {
                    setActiveStageId(stage.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full rounded-lg border px-3 py-2 text-left transition ${
                    stage.id === activeStageId
                      ? "border-cyan-400/40 bg-cyan-500/10"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  <p className="text-sm font-medium">{stage.title}</p>
                  <p className="text-xs text-slate-400">{stage.modules} modules</p>
                </button>
              ))}
            </div>
          </Card>
        </aside>

        <section className="space-y-6">
          <Card id="hero" className="relative overflow-hidden p-6 lg:p-8">
            <div className="absolute -right-24 -top-24 size-64 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-32 left-1/3 size-72 rounded-full bg-violet-500/20 blur-3xl" />
            <Badge className="mb-4">Dark Mode First Experience</Badge>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-semibold tracking-tight lg:text-5xl"
            >
              Master Full Stack Development
            </motion.h1>
            <p className="mt-3 max-w-2xl text-slate-300">A complete roadmap from zero to job-ready developer.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-cyan-500 text-slate-950 hover:bg-cyan-400">Start Learning <ArrowRight className="ml-2 size-4" /></Button>
              <Button>Explore Documentation</Button>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Topics", value: "120+" },
                { label: "Projects", value: "18" },
                { label: "Levels", value: "6" },
              ].map((stat) => (
                <Card key={stat.label} className="p-4">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </Card>
              ))}
            </div>
          </Card>

          <Card id="roadmap" className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Interactive Roadmap</h2>
              <Badge>{activeStage.level}</Badge>
            </div>
            <div className="grid gap-3">
              {roadmapStages.map((stage, index) => (
                <motion.button
                  whileHover={{ y: -2 }}
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`relative rounded-xl border p-4 text-left transition ${
                    stage.id === activeStageId ? "border-cyan-400/45 bg-cyan-500/10" : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  {index < roadmapStages.length - 1 && (
                    <span className="absolute -bottom-3 left-7 h-3 w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{stage.title}</p>
                      <p className="text-xs text-slate-400">{stage.duration} • {stage.modules} modules</p>
                    </div>
                    <div className="text-sm text-cyan-200">{stage.progress}%</div>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <motion.div className="h-full rounded-full bg-cyan-400" initial={{ width: 0 }} animate={{ width: `${stage.progress}%` }} />
                  </div>
                </motion.button>
              ))}
            </div>
          </Card>

          <Card id={activeTab === "docs" ? "docs" : activeTab === "modules" ? "modules" : undefined} className="p-5">
            <div className="mb-4 flex flex-wrap gap-2">
              {(["overview", "docs", "modules"] as ActiveTab[]).map((tab) => (
                <Button key={tab} className={activeTab === tab ? "bg-white text-slate-900 hover:bg-slate-200" : ""} onClick={() => setActiveTab(tab)}>
                  {tab[0].toUpperCase() + tab.slice(1)}
                </Button>
              ))}
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {["All", "Frontend", "Backend", "DevOps"].map((tag) => (
                <Badge key={tag} className="bg-white/5 text-slate-300">
                  {tag}
                </Badge>
              ))}
            </div>

            {activeTab === "overview" && (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { icon: LayoutDashboard, title: "Learning Progress", value: "67%" },
                  { icon: Target, title: "Weekly Goal", value: "4 / 5 modules" },
                  { icon: Trophy, title: "Completed Modules", value: "34" },
                  { icon: Flame, title: "Roadmap Completion", value: "43%" },
                ].map((widget) => (
                  <Card key={widget.title} className="p-4">
                    <widget.icon className="mb-2 size-4 text-cyan-300" />
                    <p className="text-sm text-slate-400">{widget.title}</p>
                    <p className="text-xl font-semibold">{widget.value}</p>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "docs" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{activeStage.title} Documentation</h3>
                <p className="text-slate-300">{activeStage.docs.overview}</p>
                <ul className="list-disc space-y-2 pl-5 text-slate-300">
                  {activeStage.docs.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Card className="overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-slate-400">
                    <span>Code example</span>
                    <button onClick={() => navigator.clipboard.writeText(activeStage.docs.code)}>Copy</button>
                  </div>
                  <pre className="overflow-x-auto p-4 text-sm text-cyan-100">
                    <code>{activeStage.docs.code}</code>
                  </pre>
                </Card>
                <div className="grid gap-3 md:grid-cols-3">
                  <Card className="border-blue-400/30 bg-blue-400/10 p-3 text-sm">Note: {activeStage.docs.note}</Card>
                  <Card className="border-emerald-400/30 bg-emerald-400/10 p-3 text-sm">Tip: {activeStage.docs.tip}</Card>
                  <Card className="border-amber-400/30 bg-amber-400/10 p-3 text-sm">Warning: {activeStage.docs.warning}</Card>
                </div>
              </div>
            )}

            {activeTab === "modules" && (
              <div className="grid gap-3 sm:grid-cols-2">
                {Array.from({ length: activeStage.modules }).map((_, i) => (
                  <Card key={i} className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-medium">Module {i + 1}</p>
                      <Badge>{activeStage.level}</Badge>
                    </div>
                    <p className="text-sm text-slate-400">Practical module focused on {activeStage.title.toLowerCase()} execution.</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1"><Clock3 className="size-3.5" /> 45 min</span>
                      <span className="inline-flex items-center gap-1"><BookOpen className="size-3.5" /> guided</span>
                    </div>
                    <Button className="mt-3 w-full">Open Module</Button>
                  </Card>
                ))}
              </div>
            )}
          </Card>
        </section>

        <aside className="hidden lg:block">
          <Card className="sticky top-24 p-4">
            <h3 className="mb-3 text-sm font-semibold text-slate-300">Table of Contents</h3>
            <nav className="space-y-2 text-sm text-slate-400">
              <a className="block rounded px-2 py-1 hover:bg-white/5" href="#hero">Hero Section</a>
              <a className="block rounded px-2 py-1 hover:bg-white/5" href="#roadmap">Roadmap Visualization</a>
              <a className="block rounded px-2 py-1 hover:bg-white/5" href="#docs">Documentation Engine</a>
              <a className="block rounded px-2 py-1 hover:bg-white/5" href="#modules">Module System</a>
            </nav>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.02] p-3 text-xs text-slate-400">
              Next recommended topic:
              <p className="mt-1 text-sm text-white">API Design Patterns</p>
              <p className="mt-2 inline-flex items-center gap-1 text-emerald-300"><CheckCircle2 className="size-3.5" /> You are on track this week</p>
            </div>
          </Card>
        </aside>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        Built for ambitious developers • FullStack Atlas
      </footer>
    </div>
  );
}
