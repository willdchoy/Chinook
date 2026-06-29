<script lang="ts">
  import "@/app/styles/base.css"
  import { onNavigate } from "$app/navigation"
  import Header from "@/features/header/ui/Header.svelte"

  let { children } = $props()

  onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
  })
</script>

<div class="layout-container">
  <Header />
  <div class="layout-content">
    <main>
      {@render children()}
    </main>
  </div>
</div>
