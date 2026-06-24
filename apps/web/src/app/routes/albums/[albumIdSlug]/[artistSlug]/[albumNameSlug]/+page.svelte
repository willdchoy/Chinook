<script lang="ts">
  import ArtistProfile from "$lib/components/artist-profile/components/ArtistProfile.svelte"
  const { data } = $props()
</script>

<ArtistProfile {data} />

<!-- 
  route    > widget > feature        > en > shared

  home     > widget > home-page      > .. > shared
  artist   > widget > artist-profile > .. > shared
  user     > widget > user-profile   > .. > shared
  playlist > widget > artist-profile > .. > shared
  album    > widget > artist-profile > .. > shared
-->
