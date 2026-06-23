<script>
  import Playlist from "../playlist/Playlist.svelte"
  import List from "../list/List.svelte"

  const { playlists } = $props()
</script>

<div class="tabs">
  <details name="alpha" style="--n: 1" open>
    <summary>Tracks</summary>
    <!-- <Playlist {playlists} /> -->
  </details>
  <details name="alpha" style="--n: 2">
    <summary>Albums</summary>
    <List albums={playlists} />
  </details>
  <details name="alpha" style="--n: 3">
    <summary>Media</summary>
    <div>YouTubes and more...</div>
  </details>
  <details name="alpha" style="--n: 4">
    <summary>About Us</summary>
    <div>Us...</div>
  </details>
</div>

<style>
  .tabs {
    display: grid;
    grid-template-columns: repeat(4, minmax(5rem, 1fr));
    grid-template-rows: auto 1fr;
    width: 100%;
  }

  details {
    display: grid;
    grid-column: 1 / -1;
    grid-row: 1 / span 2;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
  }

  summary {
    z-index: 0;
    display: grid;
    grid-column: var(--n) / span 1;
    grid-row: 1;
    padding: 0.5rem;
    text-align: center;
    font-size: var(--font-size-sm);
    border-bottom: 2px solid var(--vinyl-50);
    cursor: pointer;

    @media (--cm-lg) {
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
    }
  }

  details[open] :is(summary, .summary) {
    font-weight: bold;
    background-color: var(--vinyl-50);
  }

  details::details-content {
    grid-row: 2;
    grid-column: 1 / -1;
    padding: 1rem;
  }

  details:not([open])::details-content {
    display: none;
  }

  @media screen and (width < 40em) {
    .tabs {
      grid-template-columns: repeat(4, minmax(90px, 1fr));
    }

    summary,
    details::details-content {
      padding: 0.5rem;
    }
  }
</style>
