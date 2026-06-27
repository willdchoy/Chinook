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
  <MainNav />
  <div class="hamburger">&#9776;</div>
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
      font-size: var(--font-size-xl);
      font-family: "Fjalla One", sans-serif;
    }

    a {
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
    border: 15px solid var(--blue);
    border-radius: 50%;
    background-color: transparent;
  }

  .hamburger {
    margin-top: -9px;
    font-size: var(--font-size-2xl);

    @media (--cm-md) {
      display: none;
    }
  }
</style>
