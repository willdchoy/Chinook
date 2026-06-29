<div class="create-comment">
  <input type="text" placeholder="Add a comment" />
  <div class="actions muted">
    <i class="fa-regular fa-heart"></i>
    <span><i class="fa-solid fa-up-long"></i> (1,424)</span>
    <i class="fa-solid fa-share"></i>
  </div>
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
      color: white;
      border: none;
      padding: var(--p-sm);
      padding-left: var(--p-md);
      border-radius: var(--brad);
      font-size: var(--fs-sm);

      &::placeholder {
        color: oklch(from white calc(l - 0.3) c h);
      }
    }

    .actions {
      display: flex;
      align-items: center;
      gap: var(--g-md);
      font-size: var(--fs-sm);
    }
  }
</style>
