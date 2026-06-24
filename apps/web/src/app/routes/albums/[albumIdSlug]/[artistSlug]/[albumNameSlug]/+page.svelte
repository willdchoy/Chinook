<script lang="ts">
  import ArtistProfilePage from "@/pages/artist-profile/ui/ArtistProfilePage.svelte"
  const { data } = $props()
</script>

<ArtistProfilePage {data} />
