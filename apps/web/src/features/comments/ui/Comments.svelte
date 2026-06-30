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
  <div class="comments-metadata">
    <span class="count">Comments (352)</span>
    <CreateComment />
  </div>

  <div class="comments-body">
    <Comment />
    <Comment />
    <Comment />
    <Comment />
  </div>

  <div class="comments-view-more">
    <a href="_" onclick={handleViewMoreClick} class="view-more-cta"
      >View {isMoreText ? "more" : "less"} comments</a
    >
  </div>
</div>

<style>
  .comments-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--g-xl);
    padding: var(--p-md);

    .comments-metadata {
      display: flex;
      flex-direction: column;
      gap: var(--g-sm);

      .count {
        display: block;
        font-size: var(--fs-sm);
      }
    }

    .comments-body {
      display: flex;
      flex-direction: column;
      gap: var(--g-md);
    }

    .comments-view-more {
      display: flex;
      gap: var(--g-sm);
      width: 100%;
      font-size: var(--fs-sm);
    }
  }
</style>
