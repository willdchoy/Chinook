<div class="comment">
  <div class="avatar">
    <img src="https://robohash.org/tmp" alt="" />
  </div>
  <div class="content">
    <p class="message">This sounds SOOOOOO good! I love the new album!</p>
    <div class="actions muted">
      <span>12 minutes ago</span>
      <i class="fa-solid fa-heart"></i>
      <span>
        <i class="fa-solid fa-message"></i>
        <span>Reply</span>
      </span> <br />
    </div>
  </div>
</div>

<style>
  .comment {
    display: flex;
    margin-bottom: var(--m-lg);

    .avatar {
      margin-right: var(--m-md);

      img {
        --size: 25px;

        min-width: var(--size);
        min-height: var(--size);
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        object-fit: cover;
        background-color: white;
      }
    }

    p.message {
      margin-bottom: var(--m-sm);
      font-size: var(--font-size-sm);
    }

    .actions {
      font-size: var(--font-size-sm);

      & > * {
        margin-right: var(--m-md);
      }
    }
  }
</style>
