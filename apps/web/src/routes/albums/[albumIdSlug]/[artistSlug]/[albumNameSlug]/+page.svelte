<script lang="ts">
  import Banner from "$lib/components/banners/Banner.svelte"
  import Playlist from "$lib/components/playlist/Playlist.svelte"
  import Tabs from "$lib/components/tabs/Tabs.svelte"

  const { data: playlist } = $props()

  const banner = {
    size: "sm",
    title: "Chemical Toilet",
    background:
      "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/6/12/1402582059892/c6d7df16-d2f9-44d6-8d9e-eabd9ba67111-2060x1236.jpeg"
  }
</script>

<Banner {banner}>
  <button>+ Follow</button>
</Banner>

<br />

<div class="artist">
  <Tabs {playlist} />
</div>

<style>
  .artist {
  }
</style>
