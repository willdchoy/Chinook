<script>
  import Playlist from "../playlist/Playlist.svelte"

  const { playlist } = $props()
</script>

<div class="grid">
  <details name="alpha" style="--n: 1" open>
    <summary>Tracks</summary>
    <Playlist {playlist} />
  </details>
  <details name="alpha" style="--n: 2">
    <summary>Albums</summary>
    <div>
      <p>Tracks you loved:</p>
      <ul>
        <li>Marnie Stern - Believing Is Seeing</li>
        <li>FKA twigs - Girl Feels Good</li>
        <li>Fat Dog - Running</li>
        <li>Parquet Courts - Tenderness</li>
        <li>Sufjan Stevens - Will Anybody Ever Love Me?</li>
      </ul>
    </div>
  </details>
  <details name="alpha" style="--n: 3">
    <summary>About Us</summary>
    <div>
      <p>Artists you follow:</p>
      <ul>
        <li>Amyl and the Sniffers</li>
        <li>Du Blonde</li>
        <li>Magdalena Bay</li>
        <li>Flying Lotus</li>
        <li>Horsegirl</li>
      </ul>
    </div>
  </details>
  <details name="alpha" style="--n: 3">
    <summary>About Us</summary>
    <div>
      <p>Artists you follow:</p>
      <ul>
        <li>Amyl and the Sniffers</li>
        <li>Du Blonde</li>
        <li>Magdalena Bay</li>
        <li>Flying Lotus</li>
        <li>Horsegirl</li>
      </ul>
    </div>
  </details>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-template-rows: auto 1fr;
    /* column-gap: 1rem; */
  }

  details {
    display: grid;
    grid-column: 1 / -1;
    grid-row: 1 / span 2;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
  }

  summary {
    grid-column: var(--n) / span 1;
    grid-row: 1;
    display: grid;
    padding: 0.5rem;
    border-bottom: 2px solid var(--blue);
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    cursor: pointer;
    z-index: 1;
  }

  details[open] :is(summary, .summary) {
    font-weight: bold;
    background-color: var(--blue);
  }

  details::details-content {
    grid-row: 2;
    grid-column: 1 / -1;
    padding: 1rem;
    border-bottom: 2px solid var;
  }

  details:not([open])::details-content {
    display: none;
  }

  @media screen and (width < 40em) {
    .grid {
      grid-template-columns: repeat(3, minmax(100px, 1fr));
      column-gap: 0.5rem;
    }

    summary,
    details::details-content {
      padding: 0.5rem;
    }
  }
</style>
