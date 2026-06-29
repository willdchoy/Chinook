<script lang="ts">
  import { createImgPlaceholder } from "$lib/utils/"
  import Banner from "$lib/components/banners/Banner.svelte"
  import Tabs from "$lib/components/tabs/Tabs.svelte"

  const { data } = $props()

  const artistName = () => data?.playlist?.data?.artist.name
  const bgUrl = createImgPlaceholder(artistName(), 1420, 250)
  const banner = {
    size: "sm",
    title: artistName(),
    bgUrl
  }
</script>

<div class="page artist-profile-page">
  <Banner {banner}>
    <a href="/">OurWebisite.com</a> <br />
    +Follow (1,245 following)
  </Banner>
  <div class="artist-details">
    <Tabs playlists={data.playlists} playlist={data.playlist} />
  </div>
</div>

<style>
  .artist-profile-page {
    .artist-details {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;

      @media (--cm-md) {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 50px;
      }
    }
  }
</style>
