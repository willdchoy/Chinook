import { browser } from "$app/environment";

export const load = async ({ fetch, params }) => {
  if (browser) {
    const id = params.albumIdSlug || 1;

    const endpoint = `https://192.168.1.134:8000/api/v1/playlists/${id}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    return { ...data };
  }
};
