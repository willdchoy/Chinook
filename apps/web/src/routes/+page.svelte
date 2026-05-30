<script>
  import List from "$lib/components/list/List.svelte";
  import homepageBanner from "$lib/assets/img/homepage-banner.png"
  const { data: albums } = $props();
</script>

<div class="home">
  <div class="home-banner">
    <img src={homepageBanner} alt="The Band" />
  </div>
  <List {albums} />
</div>

<style>
  .home {
    .home-banner {
      margin: -10px;
      margin-bottom: 25px;
      border-bottom: 1px solid var(--vinyl-50);
    }
  }
</style>
