<script lang="ts">
  import ArtistProfile from "$lib/components/artist-profile/ArtistProfile.svelte"
  const { data } = $props()
</script>

<ArtistProfile {data} />
