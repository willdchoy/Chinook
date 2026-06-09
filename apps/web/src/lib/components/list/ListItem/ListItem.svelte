<script lang="ts">
  import AlbumCover from "$lib/components/albumCover/AlbumCover.svelte";
  let { album } = $props()

  const albumLink = `/albums/${album.id}/${album.artist.name}/${album.title}`
    .replace(/ /g, '-')
    .replace(/\./g, '')
</script>

<div class="list-item">
  <a href="{albumLink}">
    <AlbumCover title={album.title} />  
    <div class="details">
      {album.title} 
      <span class="white-muted">
        {album.year}
      </span>
      <br />
      <span class="white-muted">
        by {album.artist.name}
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
