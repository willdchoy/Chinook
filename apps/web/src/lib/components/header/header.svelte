<header>
  <h1 class="logo">
    <a href="/">Chinook</a>
  </h1>
  <nav>
    <ul>
      <li>Albums</li>
      <li>Favorites</li>
      <li>Explore</li>
      <li>Library</li>
      <li>Account</li>
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
    background-color: var(--color-10);
  }

  .logo {
    margin-left: 15px;

    a {
      font-size: 2.5rem;
      color: white;
      font-family: "Black Ops One", system-ui;
      font-weight: 400;
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

      li {
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
