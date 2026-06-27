<script>
  import Filter from "@/features/filter/Filter.svelte"
  import Card from "@/lib/components/card/Card.svelte"

  const { data } = $props()
  const randomCardType = () => {
    const cardTypes = ["album", "playlist", "track"]
    // return cardTypes[Math.floor(Math.random() * cardTypes.length)]
    return "album"
  }
</script>

<div class="home-page">
  <div>
    <Filter />
  </div>

  <div class="feed">
    {#each data?.newAlbumList?.data as album}
      <Card cardType={randomCardType()} listItem={album} />
    {/each}
  </div>
</div>

<style>
  .home-page {
    .feed {
      --card-size: 150px;

      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--card-size), 1fr));
      gap: 0.3em;

      @media (--cm-md) {
        --card-size: 200px;
      }
    }
  }
</style>
