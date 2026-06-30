<script lang="ts">
  import Cover from "@/features/playlist/ui/cover/Cover.svelte"
  import { createImgPlaceholder, createSiteLinks } from "@/lib/utils"

  let { cardItem, cardType } = $props()
  const links = () => createSiteLinks(cardItem)
</script>

<div class="card-container surface-2" style:--card-type={cardType()}>
  <article class="card">
    <header class="card-image">
      <Cover url={createImgPlaceholder(cardItem.title, 500, 500)} />
    </header>
    <div class="card-metadata">
      <p>
        <a href={links().trackLink}>
          {cardItem.title}
        </a>
        <a href={links().albumLink}> album </a>
        <span class="muted">
          {cardItem.year}
          by {cardItem.artist.name}
        </span>
      </p>
      <p class="card-actions">
        <a href="/" aria-label="share"><i class="fa-solid fa-share"></i></a>
        <a href="/" aria-label="share"
          ><i class="fa-solid fa-arrow-up"></i>
          <span class="muted">(3,523)</span></a
        >
        <a href={links().discussLink} aria-label="share">
          <i class="fa-solid fa-comment"></i>
          <span class="muted">(523)</span>
        </a>
      </p>
    </div>
  </article>
</div>

<style>
  .card-container {
    article.card {
      display: flex;
      flex-direction: var(--direction, row);
      max-width: 100%;
      height: 100%;
      border-top: var(--border);

      @container style(--card-type: grid) {
        --direction: column;
        border: var(--border);
        border-radius: var(--brad);
      }

      .card-image {
        width: 100%;
        max-width: 85px;

        @container style(--direction: column) {
          max-width: 100%;
        }
      }

      .card-metadata {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 100%;
        padding: var(--p-md);
        padding-bottom: 0;

        .card-actions {
          display: flex;
          align-items: center;
          gap: var(--g-md);
          font-size: 100px;
        }
      }
    }
  }
</style>
