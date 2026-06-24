<script lang="ts">
  import Cover from "@/features/playlist/ui/cover/Cover.svelte"
  import { createImgPlaceholder } from "@/lib/utils"
  let { album } = $props()

  const playlistLink = () =>
    `/albums/${album.id}/${album.artist.name}/${album.title}`
      .replace(/ /g, "-")
      .replace(/\./g, "")
</script>

<div class="list-item">
  <Cover url={createImgPlaceholder(album.title, 500, 500)} />
  <div class="details">
    <a href={playlistLink()}>
      {album.title}
    </a>
    <span class="muted">
      {album.year}
    </span>
    <br />
    <span class="muted">
      {album.artist.name}
    </span>
  </div>
</div>

<style>
  .list-item {
    border-radius: var(--border-radius);

    .details {
      font-size: var(--font-size-sm);
      padding: var(--p-sm);
    }
  }
</style>
