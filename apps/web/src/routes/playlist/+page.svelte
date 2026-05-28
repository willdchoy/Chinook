<script lang="ts">
  import Playlist from "$lib/components/playlist/Playlist.svelte"

  const { data: albums } = $props()
</script>

<div class="breadcrumbs">
  <span><a href="/">Home</a></span>
  <span><a href="/">Playlists</a></span>
  <span>Lazy Summer Days</span>
</div>

<Playlist {albums} />

<style>
  .breadcrumbs {
    span,
    span a {
      font-size: var(--font-size-xs);
      color: var(--white-muted);
    }

    span:after {
      content: ">";
      padding: 0 3px;
    }

    span:last-child:after {
      content: "";
    }
  }
</style>
