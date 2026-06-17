<footer>
  <div class="player">
    <div class="track">
      <img src="https://picsum.photos/50/50" alt="" />
      Quia magni fugit sunt qui quia magni fugit sunt qui
        <!-- Hic quia magni fugit sunt qui <span class="muted">2026</span> -->
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
  footer {
    --height: 100%;

    position: sticky;
    bottom: 0;
    background-color: oklch(from var(--vinyl) calc(l - 0.04) c h);
    border-top: 1px solid var(--vinyl-50);

    @media (min-width: 768px) {
      border: 1px solid var(--vinyl-50);
    }

    & .player {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 100%;

      @media(min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      & .track {
        display: flex;
        align-items: center;
        font-size: var(--font-size-sm);
        width: 100%;

        & img {
          height: 50px;
          max-height: calc(100px - 2px);
          margin-right: 10px;
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
