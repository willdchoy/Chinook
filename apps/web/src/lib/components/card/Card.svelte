<script lang="ts">
  import Cover from "@/features/playlist/ui/cover/Cover.svelte"
  import { createImgPlaceholder } from "@/lib/utils"

  let { listItem, cardType } = $props()
  const link = () =>
    `/artist/${listItem.artist.name}`.replace(/ /g, "-").replace(/\./g, "")
</script>

<article class={`card stack ${cardType}`}>
  <div class="card-image">
    <Cover url={createImgPlaceholder(listItem.title, 500, 500)} />
  </div>
  <div class="card-metadata">
    <p>
      <a href={link()}>
        {listItem.title}
      </a>

      <span class="muted">
        {listItem.year}
        by {listItem.artist.name}
      </span>
    </p>
  </div>
</article>

<style>
  .stack {
    display: flex;
    flex-direction: var(--direction, row);
  }

  .card {
    --direction: column;

    display: flex;
    border: var(--border);
    border-radius: var(--border-radius);

    .card-image {
      width: 100%;
      max-width: 60px;

      @container style(--direction: column) {
        max-width: 100%;
      }
    }

    .card-metadata {
      font-size: var(--font-size-sm);
      padding: 0 var(--p-sm);

      @container style(--direction: column) {
        padding: var(--p-sm);
      }
    }

    &.track {
      .card-image {
        display: none;
      }
    }

    &.album {
    }

    &.playlist {
    }
  }
</style>
