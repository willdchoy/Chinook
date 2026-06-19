<script>
  import Banner from "$lib/components/banners/Banner.svelte"
  import Playlist from "$lib/components/playlist/Playlist.svelte"
  const { data: playlist } = $props()

  const banner = {
    title: " Discover. Get Discovered.",
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
  <Playlist {playlist} />
</div>

<style>
  .home {
  }
</style>
