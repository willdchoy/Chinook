import { browser } from "$app/environment";

export const load = async ({ fetch }) => {
  if (browser) {
    const endpoint = "https://localhost:433/albums";
    const response = await fetch(endpoint);
    const data = await response.json();
    return { data };
  }
};
