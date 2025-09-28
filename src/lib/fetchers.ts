import { General, Project, Experience, Education } from "./types";

async function getJson<T>(path: string, revalidateSeconds = 60 * 60) {
  const res = await fetch(path, { next: { revalidate: revalidateSeconds } });
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  return (await res.json()) as T;
}

export const getGeneral = () =>
  getJson<General>("/service/resume_general_info_service.json");

export const getPortfolio = () =>
  getJson<Project[]>("/service/resume_portfolio_service.json");

export const getExperience = () =>
  getJson<Experience[]>("/service/resume_experience.json");

export const getEducation = () =>
  getJson<Education[]>("/service/resume_education.json");
