import { apiFetch } from "./api";

export function requestTrial(data) {
  return apiFetch("/trial", {
    method: "POST",
    body: JSON.stringify(data)
  });
}
