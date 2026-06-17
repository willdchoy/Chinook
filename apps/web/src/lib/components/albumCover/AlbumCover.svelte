<script lang="ts">
  const { playlist, showMeta = false } = $props()
  const data = $derived(playlist.data || playlist)
</script>

{#if data}
  <div class="playlist-cover">
    <img src="https://picsum.photos/725/725" alt={data.title} />
    {#if showMeta}
      <div class="meta">
        <span class="artist muted">{data.artist.name}</span>
        <h1>
          {data.title}
          <span class="muted">{data.year}</span>
        </h1>
      </div>
    {/if}
  </div>
{/if}

<style>
  .playlist-cover {
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
      font-size: var(--font-size-md);
    }

    .artist {
      font-size: 18px;
    }
  }
</style>
