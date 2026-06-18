<script lang="ts">
  import Cover from "$lib/components/playlist/cover/Cover.svelte"
  let { album } = $props()

  const albumLink = () =>
    `/albums/${album.id}/${album.artist.name}/${album.title}`
      .replace(/ /g, "-")
      .replace(/\./g, "")
</script>

<div class="list-item">
  <a href={albumLink()}>
    <Cover playlist={album} />
    <div class="details">
      {album.title}
      <span class="muted">
        {album.year}
      </span>
      <br />
      <span class="muted">
        {album.artist.name}
      </span>
    </div>
  </a>
</div>

<style>
  .list-item {
    cursor: pointer;
    border-radius: 5px;

    .details {
      font-size: var(--font-size-sm);
      padding: 5px;
    }
  }
</style>
