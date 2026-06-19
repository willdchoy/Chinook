<script lang="ts">
  // TODO: Update to <style src="./banner.css"></style> by adding svelte-preprocess
  import "./banner.css"

  const { children, banner = null } = $props()
</script>

<div
  class="banner"
  style:background={`url("${banner.background}")`}
  style:background-repeat="no-repeat"
  style:background-position="right"
>
  <div class="meta">
    <h1>
      {banner.title}
    </h1>
    <p>{banner.subtitle}</p>
    <div class="cta">
      {@render children()}
    </div>
  </div>
</div>

<style src="./banner.css"></style>
