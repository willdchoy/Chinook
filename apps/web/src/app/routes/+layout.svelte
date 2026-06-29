<script lang="ts">
  import "@/app/styles/base.css"
  import Header from "@/features/header/ui/Header.svelte"

  let { children } = $props()
</script>

<div class="layout-container">
  <Header />
  <div class="layout-content">
    <main>
      {@render children()}
    </main>
  </div>
</div>
