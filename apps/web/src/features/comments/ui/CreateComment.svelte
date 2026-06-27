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
    padding: var(--p-sm);

    .text {
      width: 100%;

      & > * + * {
        margin-top: 0.5em;
      }

      input {
        display: block;
        width: 100%;
        background: var(--vinyl-200);
        color: white;
        border: none;
        padding: var(--p-sm);
        padding-left: var(--p-md);
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
