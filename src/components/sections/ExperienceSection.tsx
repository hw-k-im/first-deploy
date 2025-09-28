"use client";

export default function ExperienceSection({
  experiences,
}: {
  experiences: any[];
}) {
  return (
    <section id="experience" className="my-16">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <div key={i}>
            <h3 className="text-lg font-bold">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-sm text-gray-500">{exp.period}</p>
            <p className="mt-2">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
