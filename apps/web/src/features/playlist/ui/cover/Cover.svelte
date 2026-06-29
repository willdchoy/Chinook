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

    @container style(--direction: column) {
      border-top-left-radius: var(--brad);
      border-top-right-radius: var(--brad);
    }
  }
</style>
