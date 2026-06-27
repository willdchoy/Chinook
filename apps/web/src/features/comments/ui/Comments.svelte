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

<div class="comments">
  <span class="comment-count">Comments (352)</span>
  <div>
    <Comment />
  </div>
  <div>
    <CreateComment />
  </div>
  <div class="view-more-comments hide">
    <div class="comment-indent">
      <Comment />
    </div>
    <Comment />
    <div class="comment-indent">
      <Comment />
      <div class="comment-indent">
        <Comment />
      </div>
    </div>
  </div>
  <a href="_" onclick={handleViewMoreClick} class="view-more-cta"
    >View {isMoreText ? "more" : "less"} comments</a
  >
</div>

<style>
  .comments {
    width: 100%;
    max-width: 100%;
    padding: 8px var(--p-md) var(--p-md);
    border-left: var(--border);
    margin-top: 0;

    & > * + * {
      margin-top: 0.5em;
    }

    @media (--cm-lg) {
      max-width: 25rem;
      min-width: 400px;
    }

    .comment-count {
      display: block;
      font-size: var(--font-size-sm);
    }

    .view-more-cta {
      display: block;
      width: 100%;
      text-align: center;
      font-size: var(--font-size-sm);
      cursor: pointer;
    }

    .comment-indent {
      margin-left: var(--m-xl);
    }
  }
</style>
