"use client";
import Image from "next/image";
import type { Project } from "@/lib/types";

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col bg-white dark:bg-gray-900">
      {p.thumbnail && (
        <Image
          src={p.thumbnail}
          alt={p.project_name}
          width={600}
          height={320}
          className="rounded-md object-cover mb-4 w-full h-[180px]"
        />
      )}
      <h3 className="text-lg font-bold mb-1">{p.project_name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{p.project_description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {p.tech_stack.map((t, j) => (
          <span key={j} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4 text-sm">
        <a className="text-blue-600 hover:underline" href={p.github} target="_blank">GitHub</a>
        {p.demo && <a className="text-green-600 hover:underline" href={p.demo} target="_blank">Demo</a>}
      </div>
    </div>
  );
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="my-16">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => <ProjectCard key={i} p={p} />)}
      </div>
    </section>
  );
}
