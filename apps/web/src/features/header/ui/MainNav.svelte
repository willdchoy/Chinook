<nav class="main-nav">
  <ul>
    <li>
      <a href="/">Charts</a>
    </li>
    <li>
      <a href="/">
        Latest
        <span>(23)</span>
      </a>
    </li>
    <li>
      <a href="/">Playlist</a>
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
    display: none;
    margin-right: var(--m-md);

    @media (--cm-md) {
      display: block;
    }

    ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
      list-style-type: none;

      li a {
        cursor: pointer;
        margin-right: var(--m-xl);
      }

      li:first-child a span {
        margin-left: var(--m-sm);
        color: var(--blue);
      }
    }
  }
</style>
