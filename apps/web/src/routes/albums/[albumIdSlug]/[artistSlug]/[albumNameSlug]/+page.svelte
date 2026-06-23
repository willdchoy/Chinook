<script lang="ts">
  import ArtistProfile from "$lib/features/artist-profile/components/ArtistProfile.svelte"
  const { data } = $props()
</script>

<ArtistProfile {data} />
