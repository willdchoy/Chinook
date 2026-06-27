<script lang="ts">
  const tags = [
    "Rock",
    "Hip-hop",
    "Soul",
    "Blues",
    "Pop",
    "R&B",
    "Classic Rock",
    "More Tags"
  ]
</script>

<div class="feed-options">
  <div class="feed-sort">
    <select name="feed-sort" id="feed-sort">
      <option value="latest">Latest</option>
      <option value="year">Year</option>
      <option value="artist">Artist</option>
    </select>
  </div>
  <div class="feed-filter-tags">
    {#each tags as tag}
      <div class="filter-tag">{tag}</div>
    {/each}
  </div>
</div>

<style>
  .feed-options {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-sm);

    @media (--cm-md) {
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    .feed-sort {
      display: flex;
      align-items: center;
      width: 100%;

      @media (--cm-md) {
        width: 160px;
      }
    }

    .feed-filter-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.2em;
      width: 100%;
      padding: var(--p-md);
      border-radius: var(--border-radius);

      .filter-tag {
        cursor: pointer;
        padding: var(--p-sm) calc(var(--p-sm) * 4);
        background-color: var(--vinyl-50);
        border-radius: var(--border-radius);

        &:first-child {
          color: var(--vinyl);
          background-color: var(--blue);
        }
      }
    }
  }
</style>
