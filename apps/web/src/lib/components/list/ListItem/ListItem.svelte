<script lang="ts">
  import AlbumCover from "$lib/components/albumCover/AlbumCover.svelte";
  let { album } = $props()
</script>

<div class="list-item">
  <a href="{`/albums/${album.id}`}">
    <AlbumCover title={album.title} />  
    <div class="details">
      {album.title} 
      <span class="white-muted">
        {album.year}
      </span>
      <br />
      <span class="white-muted">
        by {album.artist}
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
