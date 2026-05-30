<script lang="ts">
  import { onMount } from "svelte";
  
  const { album } = $props()
  let currentUrl: string = $state('')

  onMount(() => {
    currentUrl = window.location.href
  })
</script>

<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/">Albums</a></li>
    <li><a href={currentUrl} aria-current="page">{album.title}</a></li>
  </ol>
</nav>

<style>
  .breadcrumbs {
    display: flex;
    justify-self: flex-start;

    ol {
      display: flex;
      list-style-type: none;
      padding: 0;
    }

    li,
    li a {
      font-size: var(--font-size-xs);
      color: var(--white-muted);
    }

    li:after {
      content: ">";
      padding: 0 3px;
    }

    li:last-child:after {
      content: "";
    }
  }
</style>
