<script lang="ts">
  const { album } = $props()
</script>

<div class="playlist">
  <h1>
    {album.title}
    <span class="white-muted">{album.year}</span>
  </h1>
  <span class="white-muted">by {album.artist}</span>

  <br />
  <br />

  <table>
    <thead>
      <tr>
        <th>Track</th>
        <th>Composer</th>
      </tr>
    </thead>
    <tbody>
      {#each album.tracks as track}
        <tr>
          <td>{track.name}</td>
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
