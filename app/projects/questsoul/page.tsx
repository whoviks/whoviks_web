"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const project = {
  title: "QuestSoul",
  url: "https://questsoul.com",
  year: "2025",
  description:
    "A healing & wellness platform led by a Social Work and Counselling professional. Offers trauma-informed, gender-sensitive, and client-centred online counselling, wellness coaching, and psycho-social support — all in a confidential, non-judgemental space.",
  longDescription: `Quest Soul Healing & Wellness was built to bring professional mental health support online — making it accessible and affordable. The platform features a clean, calming design that communicates trust and professionalism.

Key features include appointment booking integration, a services showcase (individual counselling, wellness coaching, group sessions), an articles & resources section, and a contact/enquiry form.

The site is crafted with a focus on user experience — ensuring visitors can quickly understand the services and take the next step toward their wellbeing journey.`,
  tags: ["Next.js", "Vercel", "Client Work"],
};

export default function QuestSoulPage() {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const previewUrl = `https://api.microlink.io?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* ── Sticky Navbar ── */}
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-white/10 border-zinc-200 lg:border-transparent"
        }`}
      >
        <div className="container flex items-center justify-between p-6 mx-auto">
          <Link
            href="/projects"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? "text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm font-semibold duration-200 ${
              isIntersecting
                ? "text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <Globe className="w-4 h-4" />
            Visit Site
          </Link>
        </div>
      </div>

      {/* ── Hero Header ── */}
      <header
        ref={ref}
        className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black py-24 sm:py-32"
      >
        <div className="container mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          {/* LIVE badge */}
          <div className="flex items-center gap-2 bg-zinc-800/60 border border-zinc-700/50 px-3 py-1 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-400 tracking-widest uppercase">
              Live · {project.year}
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-300">
            {project.description}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-xs rounded-full border font-medium ${
                  tag === "Client Work"
                    ? "border-violet-500/40 text-violet-400 bg-violet-500/10"
                    : "border-zinc-600/50 text-zinc-300 bg-zinc-800/50"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-900 font-semibold rounded-full hover:bg-zinc-100 transition-all duration-200 hover:scale-105"
          >
            <Globe className="w-4 h-4" />
            Visit questsoul.com
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* ── Site Preview ── */}
      <section className="container mx-auto px-6 lg:px-8 py-16 max-w-5xl">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
          Site Preview
        </h2>
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/50">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="flex-1 mx-3 px-3 py-1 bg-zinc-800 rounded text-xs text-zinc-400 text-center">
              questsoul.com
            </span>
          </div>
          <img
            src={previewUrl}
            alt="QuestSoul website preview"
            className="w-full object-cover object-top"
            style={{ minHeight: "340px" }}
            onError={(e) => {
              const el = e.target as HTMLImageElement;
              el.parentElement!.innerHTML = `<div class="flex flex-col items-center justify-center h-64 text-zinc-500 gap-3"><span class="text-4xl">🌐</span><span class="text-sm">Preview loading…</span></div>`;
            }}
          />
        </div>
      </section>

      {/* ── Details ── */}
      <section className="container mx-auto px-6 lg:px-8 pb-24 max-w-3xl">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">
          About this project
        </h2>
        <div className="prose prose-invert prose-zinc max-w-none">
          {project.longDescription.split("\n\n").map((para, i) => (
            <p key={i} className="text-zinc-400 leading-8 mb-5">
              {para}
            </p>
          ))}
        </div>

        {/* Visit button at bottom */}
        <div className="mt-12 flex justify-center">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 border border-zinc-700 text-zinc-100 font-semibold rounded-full hover:bg-zinc-700 hover:border-zinc-500 transition-all duration-200 group"
          >
            <Globe className="w-4 h-4" />
            Visit questsoul.com
            <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
}
