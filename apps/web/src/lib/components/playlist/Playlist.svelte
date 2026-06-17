<script lang="ts">
  import { formatDuration } from "$lib/utils/formatDuration"
  import AlbumCover from "../albumCover/AlbumCover.svelte";

  const { playlist = null } = $props()
</script>

<div class="playlist">
  {#if playlist?.data?.id}
    <AlbumCover playlist={playlist} showMeta />
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
    
    @media (min-width: 768px) {
      flex-direction: row;
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
      th,
      td {
        text-align: left;
        cursor: pointer;
        vertical-align: top;
      }
      th {
        color: var(--muted);
        font-size: var(--font-size-xs);
        padding: 0 10px;
      }
      td {
        padding: 5px 10px;
        font-size: var(--font-size-sm);
      }

      td:nth-last-child(-n + 3) {
        color: var(--muted);
      }

      
    }
  }
</style>
