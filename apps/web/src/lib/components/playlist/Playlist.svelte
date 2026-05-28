<script lang="ts">
  const playlistName = "Lazy Summer Days"

  const { albums } = $props()
</script>

<div class="playlist">
  <h1>{playlistName}</h1>

  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Artist</th>
      </tr>
    </thead>
    <tbody>
      {#each albums.data as album}
        <tr>
          <td>{album.title}</td>
          <td> <a href="/">{album.name}</a></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .playlist {
    table {
      width: 100%;
      border-collapse: collapse;

      tr {
        border-bottom: 1px solid var(--vinyl-100);

        &:not(:has(th)):hover {
          background-color: var(--vinyl-100);
        }
      }
      th {
        text-align: left;
      }
      td {
        cursor: pointer;
        padding: 5px 0;
        font-size: var(--font-size-sm);
      }
    }
  }
</style>
