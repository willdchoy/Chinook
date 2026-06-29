<script lang="ts">
  import Cover from "@/features/playlist/ui/cover/Cover.svelte"
  import { createImgPlaceholder, createSiteLinks } from "@/lib/utils"

  let { cardItem, cardType } = $props()
  const links = () => createSiteLinks(cardItem)
</script>

<div class="card-container" style:--card-type={cardType}>
  <article class="card">
    <div class="card-image">
      <Cover url={createImgPlaceholder(cardItem.title, 500, 500)} />
    </div>
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
      <footer class="muted">
        <span><i class="fa-solid fa-arrow-up"></i></span>
        <span><i class="fa-solid fa-share"></i></span>
        <a href={links().discussLink}>
          <i class="fa-solid fa-comment"></i>
          <span>(523)</span>
        </a>
      </footer>
    </div>
  </article>
</div>

<style>
  .card-container {
    article.card {
      --bg-color: hsl(from white h s calc(l * 0.3));
      --bg-color-hover: hsl(from white h s calc(l * 0.2));

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
        padding: var(--p-sm) var(--p-md) 0;
        font-size: var(--fs-sm);

        footer {
          display: flex;
          align-items: center;
          gap: var(--g-md);
        }
      }
    }
  }
</style>
