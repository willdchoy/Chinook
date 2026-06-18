<script>
  import Playlist from "$lib/components/playlist/Playlist.svelte";
  const { data: playlist } = $props();
</script>

<div class="home">
  <div class="home-banner">
    <div class="meta">
      <h1>
        Discover. <br />
        Get Discovered.
      </h1>
      <p>Find your next favorite artist.</p>
      <button>I'm a listener</button> 
      <button>I'm an artist</button>
    </div>
  </div>
  <Playlist {playlist} />
</div>

<style>
  .home {

    .home-banner {
      width: 100%;
      height: 100%;
      min-height: 255px;
      max-height: 500px;
      margin-bottom: 30px;
      padding: 30px 0;
      border-bottom: 1px solid var(--vinyl-50);

      @media (min-width: 768px) {
        background: url("https://checkout.sndcdn.com/checkout-hero-images/hero-background-image-speakers.svg");
        background-repeat: no-repeat;
        background-position: right;
      }

      .meta {
        padding-left: 10px;

        @media (min-width: 768px) {
          padding-left: 40px;
        }
      }

      h1 {
        margin-bottom: 10px;
        font-size: var(--font-size-xxl);
        line-height: 1;
      }

      p {
        margin-bottom: 1rem;
        font-size: var(--font-size-l);
        line-height: 1;
      }
    }
  }
</style>
