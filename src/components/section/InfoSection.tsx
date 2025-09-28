"use client";
import Image from "next/image";
import type { General } from "@/lib/types";

export default function InfoSection({ general }: { general: General }) {
  return (
    <section id="info" className="pt-12 pb-8 text-center">
      <Image
        src={general.profile_image || "/images/my-image.jpeg"}
        alt={general.name}
        width={140}
        height={140}
        className="rounded-full mx-auto mb-4 object-cover"
      />
      <h1 className="text-3xl font-bold mb-2">{general.name}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">{general.title}</p>
      <div className="mt-4 flex justify-center gap-4 text-sm">
        {general.github && (
          <a href={general.github} target="_blank" className="text-blue-600 hover:underline">
            GitHub
          </a>
        )}
        {general.linkedin && (
          <a href={general.linkedin} target="_blank" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
        )}
        {general.email && (
          <a href={`mailto:${general.email}`} className="text-blue-600 hover:underline">
            {general.email}
          </a>
        )}
      </div>
    </section>
  );
}
