<footer class="player-wrapper">
  <div class="player">
    <div class="track">
      <img src="https://picsum.photos/100/100" alt="" />
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
    --mobilePlayerHeight: 60px;
    --playerHeight: 100px;

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
      height: var(--mobilePlayerHeight);

      @media (--cm-md) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: var(--playerHeight);
      }

      .track {
        flex: 1;
        display: flex;
        align-items: center;
        font-size: var(--font-size-sm);
        height: 100%;

        img {
          max-height: calc(var(--mobilePlayerHeight) - 2px);
          margin-right: var(--m-md);
          @media (--cm-md) {
            max-height: calc(var(--playerHeight) - 2px);
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
