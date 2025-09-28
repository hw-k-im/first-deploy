"use client";
import Image from "next/image";

export default function InfoSection({ general }: { general: any }) {
  return (
    <section id="info" className="text-center my-12">
      {/* 프로필 사진 */}
      <Image
        src={general.profile_image}
        alt={general.name}
        width={120}
        height={120}
        className="mx-auto rounded-full border border-gray-600"
      />

      {/* 이름 / 직함 */}
      <h1 className="text-2xl font-bold mt-4">{general.name}</h1>
      <p className="text-gray-400">{general.title}</p>

      {/* 이메일 */}
      <p className="mt-2 text-sm text-gray-500">{general.email}</p>

      {/* 링크 */}
      <div className="flex justify-center gap-6 mt-3">
        <a
          href={general.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href={`mailto:${general.email}`}
          className="text-blue-400 hover:underline"
        >
          Email
        </a>
      </div>
    </section>
  );
}
