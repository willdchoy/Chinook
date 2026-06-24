<div class="create-comment">
  <div class="text">
    <input type="text" placeholder="Add a comment" />
    <div class="actions">
      <i class="fa-regular fa-heart muted"></i>
      <i class="fa-solid fa-share muted"></i>
    </div>
  </div>
</div>

<style>
  .create-comment {
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
        font-size: var(--font-size-sm);

        &::placeholder {
          color: oklch(from white calc(l - 0.3) c h);
        }
      }

      .actions {
        font-size: var(--font-size-base);
      }
    }
  }
</style>
