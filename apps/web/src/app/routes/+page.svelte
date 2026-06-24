<script>
  import HomePage from "@/pages/home/ui/HomePage.svelte"
  const { data } = $props()
</script>

<HomePage albums={data} />
