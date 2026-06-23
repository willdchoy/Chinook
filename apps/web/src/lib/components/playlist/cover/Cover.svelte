<script>
  const { url } = $props()
</script>

<div class="cover-image">
  <img src={url} class="image" alt={url} />
</div>

<style>
  .cover-image {
    min-width: 40px;
    max-width: 100%;
    aspect-ratio: 1 / 1;

    @container style(--direction: column) {
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }
  }
</style>
