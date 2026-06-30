<div class="create-comment">
  <input type="text" placeholder="Add a comment" />
</div>

<style>
  .create-comment {
    display: flex;
    flex-direction: column;
    gap: var(--g-sm);
    width: 100%;

    input {
      display: block;
      width: 100%;
      background: var(--vinyl-200);
      color: var(--text1);
      border: var(--border);
      padding: var(--p-sm);
      padding-left: var(--p-md);
      border-radius: var(--brad);
      font-size: var(--fs-sm);

      &::placeholder {
        color: oklch(from var(--text1) calc(l - 0.3) c h);
      }
    }
  }
</style>
