<script>
  const { url } = $props()
</script>

<div class="cover">
  <img src={url} alt="need alt text" />
</div>

<style>
  .cover {
    img {
      border-radius: var(--border-radius);
    }
  }
</style>
