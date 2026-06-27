<script>
  import Filter from "@/features/feed-options/FeedOptions.svelte"
  import Card from "@/lib/components/card/Card.svelte"

  const { data } = $props()
  const feedType = "album"
</script>

<div class="home-page" style:--card-type={feedType}>
  <div>
    <Filter />
  </div>

  <div class="feed">
    {#each data?.newAlbumList?.data as album}
      <Card listItem={album} cardType={feedType} />
    {/each}
  </div>
</div>

<style>
  .home-page {
    .feed {
      --min-card-size: 150px;
      --max-card-size: 1fr;

      display: grid;
      grid-template-columns: repeat(
        var(--max-per-line),
        minmax(var(--min-card-size), var(--max-card-size))
      );
      gap: 0.3em;

      @container style(--card-type: track) {
        --max-per-line: 1;
        --direction: row;
      }

      @container style(--card-type: album), style(--card-type: playlist) {
        --max-per-line: auto-fill;
        --direction: column;

        @media (--cm-md) {
          --min-card-size: 200px;
        }
      }
    }
  }
</style>
