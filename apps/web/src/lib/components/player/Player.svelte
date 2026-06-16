<footer>
  <div class="player">
    <div class="track">
      <img src="https://picsum.photos/725/725" alt="" />
      <div>
        <b>Nihil magnam quia ducimus mollitia voluptatum</b> <br />
        Hic quia magni fugit sunt qui <span class="white-muted">2026</span>
      </div>
    </div>
    <div class="controls">
       <div class="control">
        <i class="fa-solid fa-backward"></i>
        <i class="fa-solid fa-play"></i>
        <i class="fa-solid fa-forward"></i>
       </div>
       <div class="timeline"></div>
    </div>
  </div>
</footer>

<style>
  footer {
    --height: 100px;

    position: sticky;
    bottom: 0;
    background-color: var(--vinyl);
    border: 1px solid var(--vinyl-50);

    & .player {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

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
          height: 100px;
          max-height: calc(var(--height) - 2px);
          margin-right: 10px;
        }
      }

      & .controls {
        width: 100%;
        
        @media(min-width: 768px) {
          padding-right: 20px;
        }

        .timeline {

        }

        .control {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50px;
          width: 100%;
          background-color: var(--vinyl-50);
        
          @media(min-width: 768px) {
            height: 80px;
            border-radius: 5px;
            margin-left: 10px;
          }
          
          & .fa-play {
            font-size: var(--font-size-xl);
            margin: 0 20px;
          }

          .fa-forward, .fa-backward {
            font-size: var(--font-size-md);
          }
        }
      }

    }
  }
</style>
