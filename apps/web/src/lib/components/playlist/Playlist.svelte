<script lang="ts">
  import { formatDuration } from "$lib/utils/formatDuration"
  import Cover from "./cover/Cover.svelte"

  const { playlist = null } = $props()
</script>

<div class="playlist">
  {#if playlist?.data?.id}
    <div class="tracks">
      <Cover {playlist} />
      <table>
        <thead>
          <tr>
            <th>Track</th>
            <th>Artist</th>
            <th>Album</th>
            <th class="hide-mobile">Year</th>
            <th class="hide-mobile">Time</th>
            <th class="hide-mobile">Composer</th>
          </tr>
        </thead>
        <tbody>
          {#each playlist?.data?.tracks as track}
            <tr>
              <td>{track.title}</td>
              <td>{playlist.data.artist.name}</td>
              <td>{playlist?.data?.title}</td>
              <td class="hide-mobile">{playlist?.data?.year}</td>
              <td class="hide-mobile">{formatDuration(track.duration)}</td>
              <td class="hide-mobile">{track.composer}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    <div class="chat">View comments</div>
  {/if}
</div>

<style>
  .playlist {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    width: 100%;

    @media (--cm-md) {
      flex-direction: row;
    }

    .tracks {
      display: flex;
      flex-direction: column;
    }

    .chat {
      width: 100%;
      padding: var(--p-md);
      text-align: center;
      border-bottom: var(--border);

      @media (--cm-md) {
        max-width: 25rem;
        border: none;
      }
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

        &:last-child:not(:has(th)) {
          border: none;
        }
      }

      th,
      td {
        text-align: left;
        cursor: pointer;
      }

      th {
        color: var(--muted);
        font-size: var(--font-size-xs);
        padding: 0 var(--m-md);
      }

      td {
        padding: var(--p-md) var(--m-md);
        font-size: var(--font-size-sm);
      }

      td:nth-last-child(-n + 3) {
        color: var(--muted);
      }

      th.hide-mobile,
      td.hide-mobile {
        display: none;

        @media (min-width: 1050px) {
          display: table-cell;
        }
      }
    }
  }
</style>
