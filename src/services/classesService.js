import { apiFetch } from "./api";

export function getClasses() {
  return apiFetch("/classes");
}

export function getClassBySlug(slug) {
  return apiFetch(`/classes/${encodeURIComponent(slug)}`);
}
