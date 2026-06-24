<script lang="ts">
  import { createImgPlaceholder } from "$lib/utils/"
  import Banner from "$lib/components/banners/Banner.svelte"
  import Comments from "@/features/comments/Comments.svelte"
  import Tabs from "$lib/components/tabs/Tabs.svelte"

  const { data } = $props()
  const artistName = () => data?.tracks?.data?.artist.name
  const bgUrl = createImgPlaceholder(artistName(), 1420, 250)
  const banner = {
    size: "sm",
    title: artistName(),
    bgUrl
  }
</script>

<div class="artist">
  <Banner {banner}>
    <a href="/">OurWebisite.com</a> <br />
    +Follow (1,245 following)
  </Banner>
  <div class="artist-details">
    <Tabs playlists={data.playlists} />
    <Comments />
  </div>
</div>

<style>
  .artist {
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
