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

  let { isGrid = $bindable() } = $props()
  const handleClick = () => (isGrid = !isGrid)
</script>

<div class="feed-options">
  <div class="feed-filter-tags">
    {#each tags as tag}
      <div class="filter-tag">{tag}</div>
    {/each}
  </div>
  <div class="feed-block">
    <div class="feed-sort">
      <select name="feed-sort" id="feed-sort">
        <option value="latest">Latest</option>
        <option value="year">Year</option>
        <option value="artist">Artist</option>
      </select>
    </div>
    <div class="feed-type">
      {#if isGrid}
        <button onclick={handleClick} aria-label="Show as list"
          ><i class="fa-solid fa-list"></i></button
        >
      {:else}
        <button onclick={handleClick} aria-label="Show as grid"
          ><i class="fa-solid fa-grip"></i></button
        >
      {/if}
    </div>
  </div>
</div>

<style>
  .feed-options {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-sm);

    @media (--cm-md) {
      flex-direction: row;
      gap: 20px;
    }

    .feed-block {
      display: flex;
    }

    .feed-sort {
      display: flex;
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
        padding: var(--p-sm) calc(var(--p-sm) * 2);
        background-color: var(--vinyl-50);
        border-radius: var(--border-radius);

        @media (--cm-md) {
          padding: var(--p-sm) calc(var(--p-sm) * 4);
        }

        &:first-child {
          color: var(--vinyl);
          background-color: var(--blue);
        }
      }
    }

    .feed-type {
      margin-right: (--m-lg);

      button {
        font-size: var(--font-size-lg);
        background: none;
        border: none;
        color: white;

        @media (--cm-md) {
          font-size: var(--font-size-md);
        }
      }
    }
  }
</style>
