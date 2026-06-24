<script>
  import Cover from "$lib/components/playlist/cover/Cover.svelte"
  import { createImgPlaceholder } from "$lib/shared"
</script>

<footer class="player-wrapper">
  <div class="player">
    <div class="track">
      <div class="track-image">
        <Cover url={createImgPlaceholder("track", 100, 100)} />
      </div>
      <div class="meta">
        <span class="artist muted">Lital</span>
        Corrupti quo consequatur reprehenderit accusantium et
        <span class="muted">2017</span>
      </div>
    </div>
    <div class="controls">
      <span class="additional">
        <i class="fa-solid fa-backward muted"></i>
      </span>
      <i class="fa-solid fa-pause"></i>
      <i class="fa-solid fa-forward muted"></i>
    </div>
    <div class="additional options">
      <i class="fa-solid fa-plus muted"></i>
      <i class="fa-regular fa-heart muted"></i>
      <i class="fa-solid fa-shuffle muted"></i>
      <i class="fa-brands fa-chromecast muted"></i>
    </div>
  </div>
</footer>

<style>
  footer.player-wrapper {
    --mobilePlayerSize: 60px;
    --playerSize: 100px;

    position: sticky;
    bottom: 0;
    background-color: oklch(from var(--vinyl) calc(l - 0.04) c h);
    border-top: var(--border);

    @media (--cm-md) {
      border: var(--border);
    }

    & > .player {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: var(--mobilePlayerSize);

      @media (--cm-md) {
        height: var(--playerSoze);
      }

      .track {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: var(--font-size-sm);

        .track-image {
          width: 100%;
          max-width: var(--mobilePlayerSize);
          margin-right: var(--m-md);

          @media (--cm-md) {
            width: 100%;
            max-width: var(--playerSize);
          }
        }
      }

      .artist {
        display: none;

        @media (--cm-md) {
          display: block;
        }
      }

      .controls {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        margin-left: var(--m-md);

        @media (--cm-md) {
          flex: 1;
          justify-content: center;
        }

        span {
          display: inline;
        }

        & [class*="fa-"] {
          cursor: pointer;
          margin: 0 var(--m-md);
          font-size: var(--font-size-md);
        }

        .additional {
          display: none;

          @media (--cm-md) {
            display: block;
          }
        }
      }

      .options {
        flex: 1;
        display: none;
        justify-self: flex-end;
        margin-right: var(--m-md);
        font-size: var(--font-size-base);

        @media (--cm-md) {
          display: flex;
          justify-content: flex-end;

          & > * {
            margin-right: var(--m-md);
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
