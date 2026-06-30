<script>
  import MainNav from "./MainNav.svelte"
</script>

<header class="main-header">
  <div>
    <div class="logo">
      <div class="record"></div>
      <h1><a href="/">BangerTracks</a></h1>
    </div>
  </div>
  <div class="mobile">
    <div class="hamburger">&#9776;</div>
  </div>
  <div class="desktop">
    <MainNav />
  </div>
</header>

<style>
  header.main-header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    padding: 0 var(--p-lg);
    border-bottom: var(--border);
  }

  .logo {
    display: flex;
    align-items: center;

    h1 {
      margin: 0;
      padding: 0;

      font-family: "Fjalla One", sans-serif;
    }

    a {
      font-size: var(--fs-xl);

      &:hover {
        text-decoration: none;
      }
    }
  }

  .record {
    display: inline-block;
    width: 35px;
    height: 35px;
    margin-right: var(--m-sm);
    border: 15px solid var(--brand);
    border-radius: 50%;
    background-color: transparent;
  }

  .mobile {
    margin-top: -9px;
    font-size: var(--fs-2xl);

    @media (--cm-md) {
      display: none;
    }
  }

  .desktop {
    display: none;

    @media (--cm-md) {
      display: block;
    }
  }
</style>
