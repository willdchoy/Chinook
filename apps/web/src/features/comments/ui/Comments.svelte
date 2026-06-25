<script>
  import Comment from "./Comment.svelte"
  import CreateComment from "./CreateComment.svelte"
</script>

<div class="comments">
  <span class="header">Comments (352)</span>
  <CreateComment />
  <Comment />
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

<style>
  .comments {
    width: 100%;
    max-width: 100%;
    margin-bottom: var(--m-xl);
    padding: 8px var(--p-md) var(--p-md);
    border-left: var(--border);

    @media (--cm-lg) {
      max-width: 25rem;
      min-width: 400px;
    }

    .header {
      display: block;
      font-size: var(--font-size-sm);
      margin-bottom: var(--m-md);
    }

    .comment-indent {
      margin-left: var(--m-xl);
    }
  }
</style>
