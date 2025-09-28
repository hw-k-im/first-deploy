"use client";
import Image from "next/image";
import type { Project } from "@/lib/types";

export default function ProjectSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="my-16">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div key={i} className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg transition">
            {project.thumbnail && (
              <Image
                src={project.thumbnail}
                alt={project.project_name}
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-bold">{project.project_name}</h3>
              <p className="text-sm text-gray-400">{project.project_description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm mt-2 inline-block"
              >
                GitHub →
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 text-blue-400 hover:underline text-sm"
                >
                  Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
