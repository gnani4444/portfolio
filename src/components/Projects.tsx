"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "GiftVision",
    subtitle: "AI Product Customisation Platform",
    description:
      "Interactive split-pane web app where users chat with Google Gemini to customise awards, trophies, and gifts via natural language. The AI generates realistic product images with modifications applied in real time.",
    longDesc:
      "Users select a base product from the gallery, then describe desired changes in plain English — 'add a gold rim', 'engrave my name', 'make it silver'. Gemini 2.0 Flash receives both the base product image (multimodal input) and the user prompt, generating a modified product image instantly.",
    tags: ["Next.js 16", "TypeScript", "React 19", "Gemini 2.0 Flash", "TailwindCSS", "Multimodal AI"],
    gradient: "from-blue-500/20 to-cyan-400/20",
    accentColor: "#2997ff",
    icon: "🎁",
    features: [
      "Multimodal AI (image + text input)",
      "Real-time image generation",
      "Split-pane chat UI",
      "Product gallery with 4 base items",
    ],
    link: null,
    github: null,
    badge: "Personal Project",
  },
  {
    title: "Campaign Intelligence Platform",
    subtitle: "GenAI Agentic Data Extraction System",
    description:
      "Multi-turn GenAI agentic loop that extracts structured fields from unstructured telecom promotional campaign text — partner, product, promotion type, and offer details — with 90%+ accuracy.",
    longDesc:
      "The system runs a multi-turn LLM conversation with tool use: database lookup for partner resolution, two-layer business rule validation, and automatic self-correction retry. Supports OpenAI GPT-4o and Google Gemini interchangeably. Full audit trail logged as structured JSONL.",
    tags: ["Python", "FastAPI", "LangChain", "OpenAI GPT-4o", "Gemini", "SQLite", "Pydantic"],
    gradient: "from-pink-600/20 to-orange-600/20",
    accentColor: "#FF6584",
    icon: "🤖",
    features: [
      "Multi-turn agentic loop (up to 10 turns)",
      "Two-layer validation + self-correction",
      "Provider-agnostic (OpenAI / Gemini)",
      "Full JSONL audit trail",
    ],
    link: null,
    github: null,
    badge: "Production System",
  },
  {
    title: "Agentic Job Discovery Engine",
    subtitle: "Autonomous Career Page Scraper",
    description:
      "Agentic tool that reads companies and job keywords from a Google Sheet, searches for career pages via Google Search + Gemini disambiguation, scrapes listings with Playwright, and writes results back automatically.",
    longDesc:
      "End-to-end autonomous pipeline: reads from Google Sheets → searches for career pages → scrapes job listings with headless Chromium → uses Gemini to disambiguate results → writes structured output back to the sheet. Handles pagination, dynamic JS-rendered pages, and multi-tab layouts.",
    tags: ["Python", "Playwright", "Gemini", "Google Sheets API", "BeautifulSoup", "Agentic"],
    gradient: "from-yellow-600/20 to-green-600/20",
    accentColor: "#F59E0B",
    icon: "🔍",
    features: [
      "Headless browser scraping",
      "Gemini-powered page disambiguation",
      "Google Sheets read/write",
      "Handles dynamic JS-rendered pages",
    ],
    link: null,
    github: null,
    badge: "Open Source",
  },
];

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`project-card rounded-2xl bg-dark-card border border-dark-border overflow-hidden transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Card header gradient */}
      <div
        className={`h-2 w-full bg-gradient-to-r ${project.gradient}`}
        style={{ boxShadow: `0 0 20px ${project.accentColor}40` }}
      />

      <div className="p-7">
        {/* Icon + Badge */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
            style={{
              background: `linear-gradient(135deg, ${project.accentColor}20, ${project.accentColor}40)`,
              border: `1px solid ${project.accentColor}30`,
            }}
          >
            {project.icon}
          </div>
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: `${project.accentColor}15`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}30`,
            }}
          >
            {project.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p
          className="text-sm font-medium mb-3"
          style={{ color: project.accentColor }}
        >
          {project.subtitle}
        </p>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Expandable details */}
        <div
          className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-96" : "max-h-0"}`}
        >
          <p className="text-sm text-slate-500 leading-relaxed mb-4 pt-2 border-t border-dark-border">
            {project.longDesc}
          </p>
          <ul className="space-y-1.5 mb-4">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                <span style={{ color: project.accentColor }}>▸</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-mono rounded bg-dark border border-dark-border text-slate-400 hover:text-slate-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border"
            style={{
              borderColor: `${project.accentColor}40`,
              color: project.accentColor,
              background: `${project.accentColor}10`,
            }}
          >
            {expanded ? "Show Less ↑" : "Learn More ↓"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-5">
          <span className="text-primary font-mono text-sm font-bold tracking-widest">
            04.
          </span>
          <h2 className="section-heading text-white">Projects</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-dark-border to-transparent" />
        </div>
        <p className="text-slate-400 mb-12 max-w-xl">
          A selection of AI/ML systems I've designed, built, and shipped —
          from GenAI agents to full-stack AI applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
