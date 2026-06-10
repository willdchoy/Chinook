<script lang="ts">
  import { formatDuration } from '$lib/utils/formatDuration'

  const { playlist = null} = $props()
  const playlistArtist = $derived(playlist?.data?.artist.name || 'Various Artists')
</script>

<div class="playlist">
  {#if !playlist.data.id}
    Not found!
  {/if}

  {#if playlist.data.id}
    <div class="album-cover">
      <img  src="https://picsum.photos/725/725" alt={playlist.title}>
      <div class="album-meta">  
        <span class="album-artist white-muted">{playlistArtist}</span>
        <h1>
          {playlist?.data?.title}
          <span class="white-muted">{playlist?.data?.year}</span>
        </h1>
      </div>
    </div>

    <div>
    <table>
      <thead>
        <tr>
          <th>Track</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Year</th>
          <th>Time</th>
          <th class="show-tablet">Composer</th>
        </tr>
      </thead>
      <tbody>
        {#each playlist?.data?.tracks as track}
          <tr>
            <td>{track.title}</td>
            <td>{playlist.data.artist.name}</td>
            <td>{playlist?.data?.title}</td>
            <td>{playlist?.data?.year}</td>
            <td>{formatDuration(track.duration)}</td>
            <td class="show-tablet">{track.composer}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    </div>
  {/if}
</div>

<style>
  .playlist {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    border-bottom: 1px solid var(--vinyl-50);
    margin-bottom: 30px;
    padding-bottom: 32px;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    .album-cover {
      flex: 1;
      text-align: center;
      max-width: 725px;
      margin-bottom: 5px;
    }

    .album-cover img {
      width: 100%;
      min-width: 300px;
      border-radius: 2px;
    }

    .album-meta {
      display: flex;
      flex-direction: column;
      margin: 15px 0 15px 0;
    }

    .album-meta h1 {
      font-size: 22px;
    }

    .album-artist {
      font-size: 18px;
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
      th, td {
        text-align: left;
        cursor: pointer;
        vertical-align: top;
      }
      th {
        color: var(--vinyl-50);
        font-size: var(--font-size-xs);
        padding: 0 10px;
      }
      td {
        padding: 5px 10px;
        font-size: var(--font-size-sm);
        
      }

      td:nth-last-child(-n+3) {
        color: var(--vinyl-50);
      }
    }
  }
</style>
