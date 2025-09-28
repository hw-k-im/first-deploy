"use client";

function Pills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function SkillSection({ skills }: { skills: any }) {
  return (
    <section id="skills" className="my-16">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-2 gap-6">
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
        <div>
          <h3 className="font-semibold mb-2">Tools</h3>
          <Pills items={skills.tools} />
        </div>
      </div>
    </section>
  );
}
