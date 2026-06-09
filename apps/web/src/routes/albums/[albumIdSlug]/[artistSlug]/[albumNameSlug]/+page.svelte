<script lang="ts">
  import Breadcrumbs from "$lib/components/breadcrumbs/Breadcrumbs.svelte";
  import Playlist from "$lib/components/playlist/Playlist.svelte"
 
  const { data: playlist } = $props()
</script>

<Breadcrumbs {playlist} />
<Playlist {playlist} />
