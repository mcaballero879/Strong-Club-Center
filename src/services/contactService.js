import { apiFetch } from "./api";

export function sendContact(data) {
  return apiFetch("/contact", {
    method: "POST",
    body: JSON.stringify(data)
  });
}
