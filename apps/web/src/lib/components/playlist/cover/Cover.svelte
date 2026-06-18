<script lang="ts">
  const { playlist } = $props()
  const data = $derived(playlist.data || playlist)
</script>

{#if data}
  <div class="playlist-cover">
    <img src="https://picsum.photos/725/725" alt={data.title} />
    <div class="meta">
      <div>
        <span class="artist muted">{data.artist.name}</span> <br />
        <span class="title">
          {data.title}
          <span class="muted">{data.year}</span>
        </span>
      </div>
      <div class="options muted">
        <i class="fa-solid fa-plus"></i>
        <i class="fa-solid fa-heart"></i>
        <span>
          <i class="fa-solid fa-message"></i>
          <span>(243)</span>
        </span>
      </div>
    </div>
  </div>
{/if}

<style>
  .playlist-cover {
    display: flex;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 2px;
      margin-right: 20px;
    }

    .meta {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .options {
      & > *:nth-child(n + 2) {
        cursor: pointer;
        margin-left: 10px;
      }
    }
  }
</style>
