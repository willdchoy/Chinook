<script>
  const album = {
    title: "For Those About To Rock We Salute You",
    name: "AC/DC",
    albumCoverUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/ForThoseAboutToRock_ACDCalbum.jpg"
  }
</script>

<div class="player">
  <a href="/albums/1">
    <img src={album.albumCoverUrl} alt="For Those About To Rock" />
    <div class="details">
      {album.title}<br />
      <span class="white-muted">
        by {album.name}
      </span>
    </div>
  </a>
</div>

<style>
  .player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .details {
      font-size: var(--font-size-sm);
      padding: 5px;
    }
  }
</style>
