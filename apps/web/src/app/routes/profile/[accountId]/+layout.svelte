<script>
  let { children } = $props()
</script>

<div class="account">
  <aside>
    <nav>
      <ul>
        <a href="/profile/1111/bio">
          <li>
            <i class="fa-solid fa-tv"> </i>
            Profile
          </li>
        </a>
        <a href="/profile/1111/music">
          <li>
            <i class="fa-solid fa-compact-disc"></i>
            Music
          </li>
        </a>
        <a href="/profile/1111/account">
          <li>
            <i class="fa-solid fa-circle-user"></i>
            Account
          </li>
        </a>
      </ul>
    </nav>
  </aside>
  <article>
    {@render children()}
  </article>
</div>

<style>
  .account {
    display: flex;
    flex-direction: column;

    @media (--cm-md) {
      flex-direction: row;
    }

    aside {
      margin: calc(var(--m-md) * -1);
      margin-bottom: 0;

      @media (--cm-md) {
        width: 150px;
        height: calc(100vh - 151px);
        border-right: var(--border);
      }

      nav ul {
        padding: 0;
        list-style-type: none;

        li {
          padding: var(--p-lg) var(--p-md);
          border-bottom: var(--border);

          &:hover {
            background-color: var(--blue);
            color: black;
          }

          & * {
            margin-right: var(--m-lg);
          }
        }
      }
    }

    article {
      padding: var(--p-md);

      @media (--cm-md) {
        margin: 0 0 0 var(--p-xl);
      }
    }
  }
</style>
