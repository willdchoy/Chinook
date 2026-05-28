<script lang="ts">
  import List from "$lib/components/list/List.svelte"

  let { data: albums } = $props()
</script>

<List albums={albums} />
