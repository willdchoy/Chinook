<script lang="ts">
  import List from "$lib/components/List/List.svelte"

  let { data: albums } = $props()
</script>

<List albums={albums} />
