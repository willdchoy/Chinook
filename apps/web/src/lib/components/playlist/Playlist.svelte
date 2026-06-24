<script lang="ts">
  import { formatDuration } from "$lib/shared/utils/formatDuration"
  import Cover from "$lib/components/playlist/cover/Cover.svelte"
  import { createImgPlaceholder } from "$lib/shared"

  const { playlist = null } = $props()

  function trim(text: string): string {
    const numWords = Math.floor(Math.random() * 5 + 1) || 3
    return text.split(" ").slice(1, numWords).join(" ")
  }
</script>

<div class="playlist">
  {#if playlist?.data?.id}
    <div class="tracks">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Track</th>
            <th>Album</th>
            <th>Year</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {#each playlist?.data?.tracks as track}
            <tr>
              <td>
                <Cover
                  url={createImgPlaceholder(playlist?.data?.title, 50, 50)}
                />
              </td>
              <td>{trim(track.title)}</td>
              <td>{trim(playlist?.data?.title)}</td>
              <td>{playlist?.data?.year}</td>
              <td>{formatDuration(track.duration)}</td>
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
    flex-direction: column-reverse;
    justify-content: space-between;
    width: 100%;

    @media (--cm-md) {
      flex-direction: row;
    }

    .tracks {
      width: 100%;
      display: flex;
      flex-direction: column;
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

        &:last-child:has(th),
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
      }

      td {
        padding: var(--p-sm) var(--m-sm);
        font-size: var(--font-size-sm);

        &:first-child {
          display: flex;
        }
      }

      td:nth-last-child(-n + 2) {
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
