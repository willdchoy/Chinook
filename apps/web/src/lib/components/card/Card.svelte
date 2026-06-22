<script lang="ts">
  import Cover from "$lib/components/playlist/cover/Cover.svelte"
  let { album } = $props()

  const playlistLink = () =>
    `/albums/${album.id}/${album.artist.name}/${album.title}`
      .replace(/ /g, "-")
      .replace(/\./g, "")
</script>

<article class="card stack">
  <Cover url="https://picsum.photos/500/500" />
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

    .card-metadata {
      font-size: var(--font-size-sm);
      padding: 0 var(--p-sm);

      @container style(--direction: column) {
        padding: var(--p-sm);
      }
    }
  }
</style>
