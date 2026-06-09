<script lang="ts">
  const { title } = $props();
  const tmpAblumCover = $derived(title.split(' ').map((word: string) => word[0]?.toUpperCase())?.join('') || '')
</script>

<div class="album-cover">
  <img src="https://picsum.photos/325/325" alt="">  
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

    &:hover {
      background-color: var(--vinyl-50);
    }
  }
</style>