"use client";
import type { Education } from "@/lib/types";

export default function EducationSection({ education }: { education: Education[] }) {
  return (
    <section id="education" className="my-16">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-6">
        {education.map((e, i) => (
          <div key={i}>
            <h3 className="text-lg font-bold">{e.school}</h3>
            <p className="text-sm text-gray-500">{e.period}{e.major ? ` | ${e.major}` : ""}</p>
            {e.details && <p className="mt-1">{e.details}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
