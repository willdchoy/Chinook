<script lang="ts">
  import Banner from "$lib/components/banners/Banner.svelte"
  import Comments from "$lib/components/comments/Comments.svelte"
  import Tabs from "$lib/components/tabs/Tabs.svelte"

  const { data } = $props()

  const banner = {
    size: "sm",
    title: "My Chemical Toilet",
    bgUrl: "https://picsum.photos/1420/250"
  }
</script>

<div class="artist">
  <Banner {banner}>
    <button>+ Follow</button>
  </Banner>
  <div class="artist-details">
    <Tabs playlist={data.playlist} />
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
