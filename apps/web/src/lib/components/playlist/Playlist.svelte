<script lang="ts">
  import { page} from '$app/state'
  import { formatDuration } from '$lib/utils'

  const { playlist = null} = $props()
  const playlistArtist = $derived(playlist?.data?.artist.name || 'Various Artists')
  const isPlaylist = page.url.pathname.split('/')[1] === 'playlist'

</script>

<br />

<div class="playlist">

  {#if !playlist.data}
    Not found!
  {/if}

  {#if playlist.data}
    <div class="title">
      <img src="https://picsum.photos/100/100" alt="">
      <h1>
        {playlist?.data?.title}
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
    .title {
      display: flex;
      align-items: center;
      height: 100px;
    }

    .title > img {
      margin-right: 20px;
      border-radius: 2px;
    }

    .title > h1 {
      min-height: 48px;
      line-height: 1;
    }

    .title > h1 > span.artist-name {
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
