<script lang="ts">
  import "../styles/base.css"
  import Footer from "$lib/components/footer/Footer.svelte"
  import Header from "$lib/components/header/Header.svelte"
  import favicon from "$lib/assets/favicon.svg"

  let { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
  <Header />
  <div class="content">
    <aside></aside>
    <main>
      {@render children()}
  </main>
  </div>
  <Footer /> 
</div>
