<script lang="ts">
  import Comment from "./Comment.svelte"
  import CreateComment from "./CreateComment.svelte"

  let isMoreText = $state(true)
  const handleViewMoreClick = (
    e: MouseEvent & { currentTarget: HTMLAnchorElement }
  ): void => {
    e.preventDefault()
    isMoreText = !isMoreText
    document.querySelector(".view-more-comments")?.classList.toggle("hide")
  }
</script>

<div class="comments-wrapper">
  <header>
    <span class="count">Comments (352)</span>
    <CreateComment />
  </header>

  <main>
    <Comment />
    <Comment />
    <Comment />
    <Comment />
  </main>

  <footer>
    <a href="_" onclick={handleViewMoreClick} class="view-more-cta"
      >View {isMoreText ? "more" : "less"} comments</a
    >
  </footer>
</div>

<style>
  .comments-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--g-md);
    padding: var(--p-md);

    header {
      display: flex;
      flex-direction: column;
      gap: var(--g-sm);

      .count {
        display: block;
        font-size: var(--fs-sm);
      }
    }

    main {
      display: flex;
      flex-direction: column;
      gap: var(--g-md);
    }

    footer {
      display: flex;
      justify-content: center;
      gap: var(--g-sm);
      width: 100%;
      font-size: var(--fs-sm);
    }
  }
</style>
