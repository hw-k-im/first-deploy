

export default function InfoSection({ general }: { general: any }) {
  return (
    <section id="info" className="my-16 text-center">
      <img
        src={general.profile_image}
        alt="Profile"
        className="w-40 h-40 rounded-full mx-auto mb-4"
      />
      <h1 className="text-3xl font-bold">{general.name}</h1>
      <p className="text-gray-600">{general.title}</p>
      <p className="text-sm mt-2">{general.email}</p>
      <div className="mt-4 flex justify-center gap-4">
        <a href={general.github} target="_blank" className="text-blue-500 underline">
          GitHub
        </a>
        <a href={general.linkedin} target="_blank" className="text-blue-500 underline">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

