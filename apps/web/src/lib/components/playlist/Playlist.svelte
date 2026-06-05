<script lang="ts">
  const { title = null, playlist = null} = $props()
  const playlistTitle = $derived(title || playlist?.data?.title)
  const playlistArtist = $derived(playlist?.data?.name || 'Various Artists')
</script>

<br />

<div class="playlist">
  <div class="title">
    <h1>
      {playlistTitle}
      <span class="white-muted">{playlist?.data?.year}</span>
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
      {#each playlist.data as track}
        <tr>
          <td>{track.title}</td>
          <td>{track.year}</td>
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
