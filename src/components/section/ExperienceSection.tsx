"use client";
import type { Experience } from "@/lib/types";

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="my-16">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-bold">
                {exp.company} — {exp.role}
              </h3>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <ul className="list-disc ml-5 mt-3 space-y-1 text-[15px]">
              {exp.achievements?.map((a, j) => <li key={j}>{a}</li>)}
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {exp.tech_stack.map((t, j) => (
                <span key={j} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
