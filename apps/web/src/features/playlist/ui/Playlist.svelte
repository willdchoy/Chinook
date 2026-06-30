<script lang="ts">
  import { createImgPlaceholder, formatDuration } from "@/lib/utils/"
  import Cover from "@/features/playlist/ui/cover/Cover.svelte"

  const { title = null, playlist } = $props()

  function trim(text: string): string {
    const numWords = Math.floor(Math.random() * 5 + 1) || 3
    return text.split(" ").slice(1, numWords).join(" ")
  }
</script>

<div class="playlist">
  {#if playlist?.data?.id}
    <h6>{title}</h6>
    <div class="tracks">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Track</th>
            <th>Album</th>
            <th class="center">Year</th>
            <th class="center"><i class="fa-solid fa-clock"></i></th>
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
              <td class="center">{playlist?.data?.year}</td>
              <td class="center">{formatDuration(track.duration)}</td>
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
    width: 100%;

    @media (--cm-md) {
      flex-direction: column;
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
          background-color: var(--brand);
          color: var(--vinyl);
        }
      }

      th,
      td {
        text-align: left;
        cursor: pointer;
        padding: 0 var(--p-sm);
      }

      td:first-child {
        padding: 0;
      }

      th {
        color: var(--muted);
        font-size: var(--fs-xs);
      }

      th.center,
      td.center {
        text-align: center;
      }

      td {
        font-size: var(--fs-sm);
      }

      td:nth-last-child(-n + 2) {
        color: var(--muted);
      }
    }
  }
</style>
