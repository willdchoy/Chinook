<script lang="ts">
  const { playlist } = $props()
  const data = $derived(playlist.data || playlist)
</script>

{#if data}
  <div class="playlist-cover">
    <img src="https://picsum.photos/500/500" alt={data.title} />
    <div class="meta">
      <p>
        <span class="artist muted">{data.artist.name}</span> <br />
        <span class="title">
          {data.title}
          <span class="muted">{data.year}</span>
        </span>
      </p>
      <span class="options muted">
        <i class="fa-solid fa-plus"></i>
        <i class="fa-solid fa-heart"></i>
        <span>
          <i class="fa-solid fa-message"></i>
          <span>(243)</span>
        </span> <br />
      </span>
    </div>
  </div>
{/if}

<style>
  .playlist-cover {
    display: flex;
    width: 100%;
    height: 100%;
    margin: var(--m-xl) 0;

    img {
      --image-size: 100px;

      width: var(--image-size);
      height: var(--image-size);
      border-radius: var(--border-radius);
      margin-right: var(--m-xl);
    }

    .meta {
      .options {
        margin-top: var(--m-md);

        & > *:nth-child(n + 2) {
          cursor: pointer;
          margin-left: var(--m-md);
        }
      }
    }
  }
</style>
