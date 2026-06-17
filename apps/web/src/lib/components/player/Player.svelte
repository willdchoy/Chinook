<footer class="player-wrapper">
  <div class="player">
    <div class="track">
      <img src="https://picsum.photos/100/100" alt="" />
      <div class="meta">
        <span class="artist muted">Lital</span>
        Corrupti quo consequatur reprehenderit accusantium et <span class="muted">2017</span>
      </div>
    </div>
    <div class="controls">
        <!-- <i class="fa-solid fa-shuffle muted"></i>
        <i class="fa-solid fa-backward muted"></i> -->
        <!-- <i class="fa-solid fa-play"></i> -->
         <!-- <i class="fa-solid fa-backward muted"></i> -->
        <i class="fa-solid fa-pause"></i>
        <i class="fa-solid fa-forward muted"></i>
        <!-- <i class="fa-solid fa-mobile-screen-button muted"></i> -->
       </div>
       <!-- <div class="timeline">
        <div class="meta muted">
          <span>0:01</span>
          <span class="current">3:46</span>
          <span>5:23</span>
        </div>
       </div> -->
    </div>
</footer>

<style>
  footer.player-wrapper {
    --mobilePlayerHeight: 50px;
    --playerHeight: 100px;

    position: sticky;
    bottom: 0;
    background-color: oklch(from var(--vinyl) calc(l - 0.04) c h);
    border-top: 1px solid var(--vinyl-50);

    @media (min-width: 768px) {
      border: 1px solid var(--vinyl-50);
    }

    & > div.player {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: var(--mobilePlayerHeight);

      @media(min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: var(--playerHeight);
      }

      .track {
        display: flex;
        align-items: center;
        font-size: var(--font-size-sm);
        width: 100%;
        height: 100%;
      }

      .track img {
          max-height: calc(var(--mobilePlayerHeight) - 2px);
          margin-right: 10px;

          @media (min-width: 768px) {  
            max-height: calc(var(--playerHeight) - 2px);
          }
        }     

      .artist {
          display: none;

          @media(min-width: 768px) {
            display: block;
          }
        }

      & .controls {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        margin-left: 10px;

        & [class*="fa-"] {
          cursor: pointer;
          margin: 0 10px;
          font-size: var(--font-size-md);
        }
      }
    }
  }
</style>
