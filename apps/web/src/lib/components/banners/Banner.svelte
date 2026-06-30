<script lang="ts">
  const { children, banner = null } = $props()
</script>

<div
  class="banner"
  style:background={`
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 0.65) 100%),
    url("${banner.bgUrl}")
  `}
  style:background-repeat="no-repeat"
  style:background-size="cover"
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
    align-items: flex-end;
    width: 100%;
    height: 100%;
    aspect-ratio: 3 / 1;
    padding-bottom: var(--p-2xl);
    border-bottom: var(--border);

    .meta {
      padding-left: var(--p-md);

      @media (--cm-md) {
        padding-left: var(--p-xl);
      }
    }
  }
</style>
