export default function SkillSection({ skills }: { skills: any }) {
  if (!skills) return null;

  return (
    <section id="skills" className="my-16">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold mb-2">Frontend</h3>
          <ul className="list-disc ml-5">{skills.frontend?.map((s: string, i: number) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Backend</h3>
          <ul className="list-disc ml-5">{skills.backend?.map((s: string, i: number) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">DevOps</h3>
          <ul className="list-disc ml-5">{skills.devops?.map((s: string, i: number) => <li key={i}>{s}</li>)}</ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Tools</h3>
          <ul className="list-disc ml-5">{skills.tools?.map((s: string, i: number) => <li key={i}>{s}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
