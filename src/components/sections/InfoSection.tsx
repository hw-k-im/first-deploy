"use client";
import Image from "next/image";
import type { General } from "@/lib/types";

export default function InfoSection({ general }: { general: General }) {
  return (
    <section id="info" className="text-center my-12">
      {general.profile_image && (
        <Image
          src={general.profile_image}
          alt={general.name}
          width={120}
          height={120}
          className="mx-auto rounded-full border border-gray-600"
        />
      )}
      <h1 className="text-2xl font-bold mt-4">{general.name}</h1>
      <p className="text-gray-400">{general.title}</p>
      <p className="mt-2 text-sm text-gray-500">{general.email}</p>

      <div className="flex justify-center gap-6 mt-3">
        {general.github && (
          <a href={general.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            GitHub
          </a>
        )}
        <a href={`mailto:${general.email}`} className="text-blue-400 hover:underline">
          Email
        </a>
      </div>
    </section>
  );
}
