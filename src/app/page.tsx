import InfoSection from "@/components/sections/InfoSection";
import SkillSection from "@/components/sections/SkillSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import EducationSection from "@/components/sections/EducationSection";

// 공용 함수
async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json();
}

export default async function Home() {
  const general = await fetchJson<any>(
    "https://raw.githubusercontent.com/hw-k-im/first-deploy/main/service/resume_general.json"
  );
  const portfolio = await fetchJson<any[]>(
    "https://raw.githubusercontent.com/hw-k-im/first-deploy/main/service/resume_portfolio.json"
  );
  const experience = await fetchJson<any[]>(
    "https://raw.githubusercontent.com/hw-k-im/first-deploy/main/service/resume_experience.json"
  );
  const education = await fetchJson<any[]>(
    "https://raw.githubusercontent.com/hw-k-im/first-deploy/main/service/resume_education.json"
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <InfoSection general={general} />
      <SkillSection skills={general.skills} />
      <ExperienceSection experiences={experience} />
      <ProjectSection projects={portfolio} />
      <EducationSection education={education} />
    </main>
  );
}
