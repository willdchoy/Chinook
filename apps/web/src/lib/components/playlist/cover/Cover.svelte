<script>
  const { url } = $props()
</script>

<div class="cover-image">
  <div class="image"></div>
</div>

<style>
  .cover-image {
    width: 100%;
    max-width: 60px;
    background-color: limegreen;
    aspect-ratio: 1 / 1;

    @container style(--direction: column) {
      max-width: 100%;
    }

    @container style(--direction: column) {
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }
  }
</style>
