import { browser } from "$app/environment";

export const load = async ({ fetch, params }) => {
  if (browser) {
    const endpoint = `https://localhost:433/albums/${params.slug}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return { ...data };
  }
};
