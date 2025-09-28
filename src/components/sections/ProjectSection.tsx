export default function ProjectSection({ projects }: { projects: any[] }) {
  if (!projects) return null;

  return (
    <section id="projects" className="my-16">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="space-y-6">
        {projects.map((p, i) => (
          <div key={i} className="border p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-bold">{p.project_name}</h3>
            <p className="text-sm text-gray-500">{p.period}</p>
            <p className="mt-1">{p.project_description}</p>
            {p.link && (
              <a href={p.link} target="_blank" className="text-blue-500 underline mt-2 block">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
