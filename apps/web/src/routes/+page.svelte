<script lang="ts">
  import Footer from "$lib/components/footer/footer.svelte"
  import Header from "$lib/components/header/header.svelte"
</script>

<div class="container">
  <Header />
  <main></main>
  <Footer />
</div>

<style>
  .container {
    display: grid;
    grid-template-areas:
      "header"
      "content"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr 100px;
    min-height: 100vh;
  }

  main {
    grid-area: content;
  }
</style>
