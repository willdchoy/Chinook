<script lang="ts">
  const { isAblum = false, title = null, album = null} = $props()
  const playlistTitle = $derived(title || album.title)
  const playlistArtist = $derived(album.artist || 'Various Artists')

</script>

<br />

<div class="playlist">
  <div class="title">
    <h1>
      {playlistTitle}
      {#if isAblum}
        <span class="white-muted">{album.year}</span>
      {/if}
      <br />
      <span class="artist-name white-muted">by {playlistArtist}</span>
    </h1>
  </div>

  <br />

  <table>
    <thead>
      <tr>
        <th>Track</th>
        <th>Album</th>
        <th>Year</th>
        <th>Composer</th>
      </tr>
    </thead>
    <tbody>
      {#each album.tracks as track}
        <tr>
          <td>{track.name}</td>
          <td>{album.title}</td>
          <td>{track.year}</td>
          <td>{track.composer}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .playlist {
    h1 {
      min-height: 48px;
      line-height: 1;
    }

    span.artist-name {
      font-size: var(--font-size-base);
    }

    table {
      width: 100%;
      border-collapse: collapse;

      tr {
        border-bottom: 1px solid var(--vinyl-100);

        &:not(:has(th)):hover {
          background-color: var(--blue);
          color: var(--vinyl);
        }
      }
      th {
        text-align: left;
        padding: 5px;
      }
      td {
        cursor: pointer;
        padding: 5px;
        font-size: var(--font-size-sm);
      }
    }
  }
</style>
