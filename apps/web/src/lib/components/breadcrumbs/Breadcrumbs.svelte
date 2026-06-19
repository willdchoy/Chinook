<script lang="ts">
  import { onMount } from "svelte"

  const { playlist } = $props()
  let currentUrl: string = $state("")

  onMount(() => {
    currentUrl = window.location.href
  })
</script>

<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/">Albums</a></li>
    <li>
      <a href={currentUrl} aria-current="page">{playlist?.data?.title}</a>
    </li>
  </ol>
</nav>

<style>
  .breadcrumbs {
    display: flex;
    justify-self: flex-start;
    margin-bottom: 20px;

    ol {
      display: flex;
      list-style-type: none;
      padding: 0;
    }

    li {
      color: white;
      line-height: 0;
    }

    li a {
      font-size: var(--font-size-xs);
      color: var(--muted);

      @media (--cm-md) {
        font-size: var(--font-size-sm);
      }
    }

    li:after {
      content: ">";
      color: var(--muted);
      padding: 0 3px;
    }

    li:last-child:after {
      content: "";
    }
  }
</style>
