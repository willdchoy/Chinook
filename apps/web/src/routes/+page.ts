import type { PageLoad } from "./$types";
import { browser } from "$app/environment";

export const load: PageLoad = async ({ fetch }) => {
  if (browser) {
    const endpoint = "https://localhost:8000/albums";
    const response = await fetch(endpoint);
    const data = await response.json();

    return { data };
  }
};
