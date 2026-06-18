<script>
  let { children } = $props()
</script>

<div class="account">
  <aside>
    <nav>
      <ul>
        <a href="/d/1111/profile">
        <li>  
          <i class="fa-solid fa-tv"> 
          </i>Profile
        </li>
        </a>
        <a href="/d/1111/music">
          <li>
            <i class="fa-solid fa-compact-disc"></i>
            Music
          </li>
        </a>
        <a href="/d/1111/account">
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

    @media(min-width: 768px) {
      flex-direction: row;
    }

    aside {
      margin: -10px -10px 0 -10px;

      @media(min-width: 768px) {
        width: 150px;
        height: calc(100vh - 151px);
        border-right: 1px solid var(--vinyl-50);
      }

      nav ul {
        padding: 0;
        list-style-type: none;

        li {
          padding: 15px 10px;
          border-bottom: 1px solid var(--vinyl-50);

          &:hover {
            background-color: var(--blue);
            color: black;
          }

          & * {
            margin-right: 10px;
          }
        }
      }
    }

    article {
      padding: 10px 10px;

      @media (min-width: 768px) {
        margin: 0 0 0 20px;
      }
    }
  }
</style>