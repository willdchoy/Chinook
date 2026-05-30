<script lang="ts">
  import Breadcrumbs from "$lib/components/breadcrumbs/Breadcrumbs.svelte";
  import Playlist from "$lib/components/playlist/Playlist.svelte"
 
  const { data: album } = $props()
</script>

<Breadcrumbs {album} />
<Playlist {album} />