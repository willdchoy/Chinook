<script lang="ts">
  import About from "@/lib/components/about/About.svelte"
  import Media from "@/lib/components/media/Media.svelte"
  import Banner from "$lib/components/banners/Banner.svelte"
  import Tabs from "@/lib/components/tabs/Tabs.svelte"
  import List from "@/features/list/ui/List.svelte"
  import Comments from "@/features/comments/ui/Comments.svelte"

  const { data, activeTabId } = $props()
  const playlists = () => data.playlists
  const artistName = () => data?.playlist?.data?.artist.name
  const bgUrl =
    "https://lh3.googleusercontent.com/vaNshmi_-a1iRdIcOlmwKkeVZXSkWDmEqk2JawbbIUqHYBSzkhlhymdrpDy6rPKM_PP_NXibOgddg4U=w1080-h450-p-l90-rj"
  const banner = {
    title: artistName(),
    bgUrl
  }
  const tabs = [
    {
      id: "music",
      label: "Music",
      component: List,
      props: { title: "Albums", listItems: playlists() }
    },
    {
      id: "discuss",
      label: "Discuss",
      component: Comments
    },
    {
      id: "media",
      label: "Media",
      component: Media
    },
    {
      id: "about",
      label: "About",
      component: About
    }
  ]
</script>

<div class="artist-profile-page">
  <Banner {banner}>
    <button class="outline">Follow (62.4k)</button>
  </Banner>
  <div class="artist-details">
    <Tabs {activeTabId} {tabs} />
  </div>
</div>

<style>
  .artist-profile-page {
    .artist-details {
      width: 100%;
      margin-top: 10px;
    }
  }
</style>
