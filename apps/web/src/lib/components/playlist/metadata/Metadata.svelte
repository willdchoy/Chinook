<script lang="ts">
  const { playlist } = $props()
  const data = $derived(playlist.data || playlist)
</script>

{#if data}
  <div class="metadata">
    <div class="details">
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
  .metadata {
    display: flex;
    justify-content: flex-start;

    .details {
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
