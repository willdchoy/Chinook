<script>
  import Banner from "$lib/components/banners/Banner.svelte"
  import List from "$lib/components/list/List.svelte"
  const { data: albums } = $props()

  const banner = {
    size: "lg",
    title: "Discover. Get Discovered.",
    subtitle: "Find your next favorite artist",
    background:
      "https://checkout.sndcdn.com/checkout-hero-images/hero-background-image-speakers.svg"
  }
</script>

<div class="home">
  <Banner {banner}>
    <button>I'm a listener</button>
    <button>I'm an artist</button>
  </Banner>
  <br />
  <List {albums} />
</div>

<style>
  .home {
  }
</style>
