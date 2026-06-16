<script lang="ts">
  const album = $props()
</script>

<div class="album-cover">
  <img src="https://picsum.photos/725/725" alt={album.title} />
  <div class="meta">
    <span class="artist white-muted">{album.artist}</span>
    <h1>
      {album?.data?.title}
      <span class="white-muted">{album?.year}</span>
    </h1>
  </div>
</div>

<style>
  .album-cover {
    max-width: 725px;
    min-width: 50px;

    img {
      width: 100%;
      border-radius: 2px;
    }

    .meta {
      display: flex;
      flex-direction: column;
      margin: 15px 0 15px 0;
    }

    .meta h1 {
      font-size: 22px;
    }

    .artist {
      font-size: 18px;
    }
  }
</style>
