<script lang="ts">
  // TODO: Update to <style src="./banner.css"></style> by adding svelte-preprocess
  import "./banner.css"

  const { children, banner = null } = $props()
  const sizeMap = new Map([
    ["sm", "250px"],
    ["md", "350px"],
    ["lg", "500px"]
  ])
</script>

<div
  class="banner"
  style:height={sizeMap.get(banner.size) || sizeMap.get("md")}
  style:background={`url("${banner.bgUrl}")`}
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
