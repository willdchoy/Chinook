<script lang="ts">
  import Cover from "$lib/components/playlist/cover/Cover.svelte"
  import { createImgPlaceholder } from "@/lib/utils"

  let { album } = $props()
  const playlistLink = () =>
    `/albums/${album.id}/${album.artist.name}/${album.title}`
      .replace(/ /g, "-")
      .replace(/\./g, "")
</script>

<article class="card stack">
  <div class="card-image">
    <Cover url={createImgPlaceholder(album.title, 500, 500)} />
  </div>
  <div class="card-metadata">
    <p>
      <a href={playlistLink()}>
        {album.title}
      </a>
      <span class="muted">
        {album.year}
      </span>
      <span class="muted">
        by {album.artist.name}
      </span>
    </p>
  </div>
</article>

<style>
  .stack {
    display: flex;
    flex-direction: var(--direction, row);
  }

  .card {
    display: flex;
    border-top: var(--border);

    @media (--cm-sm) {
      --direction: column;

      border: var(--border);
      border-radius: var(--border-radius);
    }

    .card-image {
      width: 100%;
      max-width: 60px;

      @container style(--direction: column) {
        max-width: 100%;
      }
    }

    .card-metadata {
      font-size: var(--font-size-sm);
      padding: 0 var(--p-sm);

      @container style(--direction: column) {
        padding: var(--p-sm);
      }
    }
  }
</style>
