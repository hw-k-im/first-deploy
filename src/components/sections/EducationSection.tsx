"use client";
import type { Education } from "@/lib/types";

export default function EducationSection({ education }: { education: Education[] }) {
  return (
    <section id="education" className="my-16">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div key={i}>
            <h3 className="text-lg font-bold">{edu.school}</h3>
            <p className="text-sm text-gray-500">
              {edu.period} {edu.major && ` | ${edu.major}`}
            </p>
            {edu.details && <p className="mt-1">{edu.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
