<script lang="ts">
  const { title } = $props();
  const tmpAblumCover = $derived(title.split(' ').map((word: string) => word[0].toUpperCase()).join(''))

</script>

<div class="album-cover">
  <span>
    {tmpAblumCover}
  </span>
</div>

<style>
  .album-cover {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    aspect-ratio: 1 / 1;
    border: 1px solid var(--vinyl-50);
    background-color: transparent; 
    transition: background-color 0.1s ease-in-out, color 0.01s ease-in-out;

    &:hover {
      background-color: var(--vinyl-50);
    }
    
    span {
      width: 50%;
      text-align: center;
      font-size: var(--font-size-lg);
      line-height: 1;
      word-wrap: break-word;  
    }
  }
</style>