<script lang="ts">
  let { album } = $props()
</script>

<div class="list-item">
  <a href="{`/albums/${album.id}`}">
  <div class="album-cover">
    <span>
    {album.title.split(' ').map((word: string) => word[0].toUpperCase()).join('')  }
    </span>
  </div>
  <div class="details">
      {album.title} 
      <span class="white-muted">
        {album.year}
      </span>
      <br />
      <span class="white-muted">
        by {album.artist}
      </span>
  </div>
  </a>
</div>

<style>
  .list-item {
    position: relative;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
    max-width: 192px;

    .album-cover {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      min-height: 190px;
      max-height: 300px;
      border: 1px solid var(--vinyl-50);
      background-color: transparent; 
      transition: background-color 0.1s ease-in-out, color 0.01s ease-in-out;

      &:hover {
        background-color: var(--vinyl-50);
      }
      
      span {
        width: 90%;
        text-align: center;
        font-size: var(--font-size-xl);
        line-height: 1;
        word-wrap: break-word;  
      }
    }

    .details {
      font-size: var(--font-size-sm);
      padding: 5px;
    }
  }
</style>
