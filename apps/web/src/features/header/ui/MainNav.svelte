<nav class="main-nav">
  <ul>
    <li>
      <a href="/">
        Feed
        <span>(23)</span>
      </a>
    </li>
    <li>
      <a href="/">Charts</a>
    </li>
    <li>
      <a href="/">Discover</a>
    </li>
    <li>
      <a href="/profile/1111/bio" aria-label="account">
        <i class="fa-solid fa-user"></i>
      </a>
    </li>
  </ul>
</nav>

<style>
  nav.main-nav {
    margin-right: var(--m-md);

    ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
      list-style-type: none;

      li a {
        cursor: pointer;
        margin-right: 20px;
      }

      li:first-child a span {
        color: var(--brand);
      }
    }
  }
</style>
