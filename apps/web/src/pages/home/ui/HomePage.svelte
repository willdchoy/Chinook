<script>
  import Filter from "@/features/feed-options/FeedOptions.svelte"
  import Card from "@/lib/components/card/Card.svelte"

  const { data } = $props()
  let isGrid = $state(true)
  let cardType = () => (isGrid ? "grid" : "list")
</script>

<div class="home-page" style:--card-type={cardType()}>
  <div>
    <Filter bind:isGrid />
  </div>

  <h1>Top tracks of the day</h1>
  <div class="feed">
    {#each data?.newAlbumList?.data as album}
      <Card listItem={album} />
    {/each}
  </div>
</div>

<style>
  .home-page {
    & > * + * {
      margin-top: 10px;
    }

    .feed {
      --min-card-size: 150px;
      --max-card-size: 1fr;

      display: grid;
      grid-template-columns: repeat(
        var(--max-per-line),
        minmax(var(--min-card-size), var(--max-card-size))
      );
      gap: 0.3em;

      @container style(--card-type: list) {
        --max-per-line: 1;
        --direction: row;
      }

      @container style(--card-type: grid) {
        --max-per-line: auto-fill;
        --direction: column;

        @media (--cm-md) {
          --min-card-size: 200px;
        }
      }
    }
  }
</style>
