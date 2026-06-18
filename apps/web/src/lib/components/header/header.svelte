<header class="main-header">
  <div>
    <h1 class="logo">
      <div class="record"></div>
      <a href="/"> Chinook </a>
    </h1>
  </div>
  <div class="hamburger">&#9776;</div>
  <nav>
    <ul>
      <li>
        <a href="/">
          Charts
        </a>
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
        <a href="/d/1111/profile" aria-label="account"><i class="fa-solid fa-user"></i></a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header.main-header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 15px;
    border-bottom: 1px solid var(--vinyl-50);
  }

  .logo {
    display: flex;
    align-items: center;

    a {
      text-transform: uppercase;
      &:hover {
        text-decoration: none;
      }
    }
  }

  .record {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 5px;
    border: 12px solid var(--blue);
    border-radius: 50%;
    background-color: transparent;
  }

  .hamburger {
    margin-top: -9px;
    font-size: var(--font-size-xxl);

    @media (min-width: 768px) {
      display: none;
    }
  }

  nav {
    display: none;
    margin-right: 10px;

    @media (min-width: 768px) {
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
        margin-right: 20px;
      }

      li:first-child a span {
        margin-left: 5px;
        color: var(--blue);
      }
    }
  }
</style>
