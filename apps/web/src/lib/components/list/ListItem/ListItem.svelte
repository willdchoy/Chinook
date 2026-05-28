<script lang="ts">
  let { album, isActive = false } = $props()

  // temp fix. update with real album cover image
  album.albumCoverUrl="https://upload.wikimedia.org/wikipedia/en/f/fb/Aerosmith_-_Big_Ones.JPG"
</script>

<div class="list-item">
  <img src={album.albumCoverUrl} alt="{album.title}" />
  <div class="details">
  <a href="/">{album.title}</a><br />
  <a href="/">
    <span class="white-muted">
      by {album.name}
    </span>
  </a>
  
  </div>
</div>

<style>
  .list-item {
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    max-width: 300px;

    .details {
      font-size: var(--font-size-sm);
      padding: 5px;
    }

    span.white-muted {
      color: var(--white-muted);
    }
  }
</style>
