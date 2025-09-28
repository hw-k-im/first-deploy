"use client";
import type { SkillsGroup } from "@/lib/types";

const Pills = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((s, i) => (
      <span key={i} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs">
        {s}
      </span>
    ))}
  </div>
);

export default function SkillsSection({ skills }: { skills: SkillsGroup }) {
  return (
    <section id="skills" className="my-16">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Frontend</h3>
          <Pills items={skills.frontend} />
        </div>
        <div>
          <h3 className="font-semibold mb-2">Backend</h3>
          <Pills items={skills.backend} />
        </div>
        <div>
          <h3 className="font-semibold mb-2">DevOps</h3>
          <Pills items={skills.devops} />
        </div>
        {skills.tools?.length ? (
          <div>
            <h3 className="font-semibold mb-2">Tools</h3>
            <Pills items={skills.tools} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
