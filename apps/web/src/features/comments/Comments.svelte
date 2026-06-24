<script>
  import Comment from "./Comment.svelte"
</script>

<div class="comments">
  <span class="header">Comments (352)</span>

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
  <div class="more-comments">
    <a href="/">View 89 more replies</a>
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

    .more-comments {
      text-align: center;
      font-size: var(--font-size-sm);
    }

    .comment-indent {
      margin-left: var(--m-xl);
    }
  }
</style>
