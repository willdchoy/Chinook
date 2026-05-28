<header>
  <h1 class="logo">
    <a href="/">CHINOOK</a>
  </h1>
  <nav>
    <ul>
      <li>
        <a href="/">Albums</a>
        <a href="/">Playlist</a>
        <a href="/">Explore</a>
        <a href="/">Account</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background-color: var(--color-10);
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
  }

  .logo {
    margin-left: 15px;

    a {
      font-size: var(--font-size-lg);
      color: white;
      font-family: var(--heading-font-family);
      font-optical-sizing: auto;
      font-weight: 700;
      font-style: normal;
    }
  }

  nav {
    margin-right: 10px;

    ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
      list-style-type: none;

      li a {
        cursor: pointer;
        margin-right: 20px;
        color: var(--color-100);

        &:hover {
          color: var(--color-70);
        }
      }
    }
  }
</style>
