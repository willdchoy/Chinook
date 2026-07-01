<script>
  import Card from "@/lib/components/card/Card.svelte"
  import FeedOptions from "@/features/feed-options/FeedOptions.svelte"

  const { data } = $props()
  let isGrid = $state(false)
  let feedType = () => (isGrid ? "grid" : "list")
</script>

<div class="home-page" style:--feed-type={feedType()}>
  <FeedOptions bind:isGrid />
  <h3>Top tracks of the day</h3>
  <div class="feed">
    {#each data?.newAlbumList?.data as album}
      <Card cardItem={album} cardType={feedType} />
    {/each}
  </div>
</div>

<style>
  .home-page {
    display: flex;
    flex-direction: column;

    .feed {
      --min-card-size: 190px;
      --max-card-size: 1fr;

      display: grid;
      grid-template-columns: repeat(
        var(--max-per-line),
        minmax(var(--min-card-size), var(--max-card-size))
      );
      gap: 0.3em;

      @container style(--feed-type: list) {
        --max-per-line: 1;
      }

      @container style(--feed-type: grid) {
        --max-per-line: auto-fill;

        @media (--cm-md) {
          --min-card-size: 200px;
        }
      }
    }
  }
</style>
