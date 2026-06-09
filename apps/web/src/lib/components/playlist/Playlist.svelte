<script lang="ts">
  import { page} from '$app/state'
  import { formatDuration } from '$lib/utils'

  const { playlist = null} = $props()
  const playlistArtist = $derived(playlist?.data?.artist.name || 'Various Artists')
  const isPlaylist = page.url.pathname.split('/')[1] === 'playlist'

</script>

<div class="playlist">

  {#if !playlist.data}
    Not found!
  {/if}

  {#if playlist.data}
    <div class="album-cover">
      <img  src="https://picsum.photos/500/500" alt={playlist.title}>
    </div>
    
    <div class="album-meta">
      <span class="album-artist white-muted">{playlistArtist}</span>
      <h1>
        {playlist?.data?.title}
        <span class="white-muted">{playlist?.data?.year}</span>
      </h1>
    </div>

    <table>
      <thead>
        <tr>
          <th>Track</th>
          {#if isPlaylist}
            <th>Album</th>
            <th>Year</th>
          {/if}
          <th>Time</th>
          <th>Composer</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {#each playlist?.data?.tracks as track}
          <tr>
            <td>{track.title}</td>
            {#if isPlaylist}
              <td>{playlist?.data?. title}</td>
              <td>{playlist?.data?.year}</td>
            {/if}
            <td>{formatDuration(track.duration)}</td>
            <td>{track.composer}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/if}
</div>

<style>
  .playlist {
    h1 {
      font-size: clamp(22px, 5cqi, 40px);
    }

    .album-cover {
      margin-bottom: 5px;
    }
    .album-cover img {
      border-radius: 2px;
    }

    .album-meta {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }

    .album-artist {
      font-size: clamp(12px, 3cqi, 25px);
      margin-bottom: 5px;
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
        font-size: var(--font-size-sm);
        padding: 5px;
        text-align: left;
      }
      td {
        cursor: pointer;
      }
    }
  }
</style>
