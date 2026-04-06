"use client";

import Link from "next/link";
import React from "react";
import { Card } from "../components/card";
import { Article } from "./article";
import type { Project } from "contentlayer/generated";

// ─── Live client sites ────────────────────────────────────────────────────────

const liveProjects = [
  {
    slug: "questsoul",
    title: "QuestSoul",
    description:
      "Healing & wellness platform — trauma-informed counselling and coaching, online sessions.",
    year: "2025",
    tags: ["Next.js", "Client Work"],
  },
  {
    slug: "omsaicentralschool",
    title: "Om Sai Central School",
    description:
      "CBSE school website with admissions portal, notice board, and admin panel.",
    year: "2025",
    tags: ["Next.js", "Supabase", "Client Work"],
  },
];

// ─── Compact live project card ────────────────────────────────────────────────

function LiveArticle({ project }: { project: (typeof liveProjects)[0] }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="flex items-center gap-1.5 text-xs text-emerald-400 duration-1000 group-hover:text-emerald-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Live · {project.year}
          </span>
        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display mt-1">
          {project.title}
        </h2>
        <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-0.5 rounded-full border ${
                tag === "Client Work"
                  ? "border-violet-500/30 text-violet-400 bg-violet-500/10"
                  : tag === "Supabase"
                  ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                  : "border-zinc-700 text-zinc-400"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}

// ─── Main view ────────────────────────────────────────────────────────────────

export function ProjectsView({ projects }: { projects: Project[] }) {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .fade-up {
          animation: fadeUp 0.55s ease both;
        }
      `}</style>

      <div className="px-6 pt-20 mx-auto space-y-16 max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        {/* Header */}
        <div className="max-w-2xl mx-auto lg:mx-0 fade-up" style={{ animationDelay: "0ms" }}>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Client work and personal explorations — things I've built and shipped.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Live Client Websites */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 fade-up" style={{ animationDelay: "80ms" }}>
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">
              Live Client Websites
            </h3>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-2">
            {liveProjects.map((project, i) => (
              <div
                key={project.slug}
                className="fade-up"
                style={{ animationDelay: `${140 + i * 100}ms` }}
              >
                <Card>
                  <LiveArticle project={project} />
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* GitHub Projects */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 fade-up" style={{ animationDelay: "360ms" }}>
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">
              GitHub Projects
            </h3>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
            {[0, 1, 2].map((col) => (
              <div key={col} className="grid grid-cols-1 gap-4">
                {projects
                  .filter((_, i) => i % 3 === col)
                  .map((project, rowIdx) => (
                    <div
                      key={project.slug}
                      className="fade-up"
                      style={{ animationDelay: `${420 + (col + rowIdx * 3) * 60}ms` }}
                    >
                      <Card>
                        <Article project={project} />
                      </Card>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
