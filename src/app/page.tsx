import EducationSection from "@/components/section/EducationSection";
import ExperienceSection from "@/components/section/ExperienceSection";
import InfoSection from "@/components/section/InfoSection";
import ProjectsSection from "@/components/section/ProjectSection";
import SkillsSection from "@/components/section/SkillSection";
import { getEducation, getExperience, getGeneral, getPortfolio } from "@/lib/fetchers";


export default async function Home() {
  const [general, portfolio, experience, education] = await Promise.all([
    getGeneral(),
    getPortfolio(),
    getExperience(),
    getEducation(),
  ]);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <InfoSection general={general} />
      <SkillsSection skills={general.skills} />
      <ExperienceSection experiences={experience} />
      <ProjectsSection projects={portfolio} />
      <EducationSection education={education} />
      <footer className="mt-16 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {general.name}. All rights reserved.
      </footer>
    </main>
  );
}
