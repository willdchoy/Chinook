<script lang="ts">
  const { children, banner = null } = $props()
  const sizeMap = new Map([
    ["sm", "250px"],
    ["md", "350px"],
    ["lg", "450px"]
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

<style>
  .banner {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 500px;
    padding-bottom: var(--p-xxl);
    border-bottom: var(--border);

    .meta {
      padding-left: var(--p-md);

      @media (--cm-md) {
        padding-left: var(--p-xl);
      }

      h1 {
        margin-block-end: var(--m-md);
        line-height: 1.1;
      }
    }

    p {
      margin-bottom: var(--m-lg);
      font-size: var(--fs-l);
      line-height: 1;
    }
  }
</style>
