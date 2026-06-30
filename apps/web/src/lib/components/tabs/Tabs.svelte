<script lang="ts">
  import type { Component } from "svelte"

  type Tab = {
    id: string
    label: string
    component: Component
    props: unknown
  }
  export type Tabs = Tab[]
  type TabProps = {
    tabs: Tabs
    activeTabId: string
  }

  let { tabs = [], activeTabId = "album" }: TabProps = $props()
  let activeTab = $derived(tabs.find((t) => t.id === activeTabId))

  function selectTab(id: string) {
    activeTabId = id
  }
</script>

<div class="tabs-container">
  <div class="tab-list" role="tablist">
    {#each tabs as tab (tab.id)}
      <button
        class="tab-button"
        class:active={tab.id === activeTabId}
        role="tab"
        aria-selected={tab.id === activeTabId}
        onclick={() => selectTab(tab.id)}
      >
        {tab.label}
      </button>
    {/each}
  </div>

  <div class="tab-panel" role="tabpanel">
    {#if activeTab}
      {const Component = $derived(activeTab.component)}
      <Component {...activeTab.props || {}} />
    {:else}
      <p class="empty">No tab selected.</p>
    {/if}
  </div>
</div>

<style>
  .tabs-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .tab-list {
    display: flex;
    border-bottom: var(--border);
  }

  .tab-button {
    padding: var(--p-md);
    border: none;
    background: none;
    cursor: pointer;
    font-size: var(--fs-base);
    color: var(--text1);
    padding: var(--p-sm) var(--p-2xl);
  }

  .tab-button:hover {
    color: var(--blue);
  }

  .tab-button.active {
    color: var(--text1);
    border-bottom: 3px solid var(--brand);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    font-weight: 600;
  }

  .tab-panel {
    padding: var(--p-lg) var(--p-md);
  }

  .empty {
    color: #999;
    font-style: italic;
  }
</style>
