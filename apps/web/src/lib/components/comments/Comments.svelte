<script>
  import Comment from "./Comment.svelte"
</script>

<div class="comments">
  <span class="header">Comments (352)</span>
  <div class="create">
    <div class="text">
      <input type="text" placeholder="Add a comment" />
      <div class="actions">
        <i class="fa-regular fa-heart muted"></i>
        <i class="fa-solid fa-share muted"></i>
      </div>
    </div>
  </div>
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

    .create {
      display: flex;
      margin-bottom: calc(var(--m-md) * 2);
      padding: 0 5px 15px;

      .text {
        width: 100%;

        input {
          display: block;
          width: 100%;
          background: var(--vinyl-200);
          color: white;
          border: none;
          padding: var(--p-sm);
          padding-left: var(--p-md);
          margin-bottom: var(--m-md);
          border-radius: var(--border-radius);

          &::placeholder {
            color: oklch(from white calc(l - 0.3) c h);
          }
        }

        .actions {
          font-size: var(--font-size-sm);
        }
      }
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
