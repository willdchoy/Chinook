<script>
  import Avatar from "@/lib/components/avatar/Avatar.svelte"
</script>

<div class="comment">
  <Avatar />
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
