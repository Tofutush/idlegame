<script lang="ts">
    import { getGuardsList } from '../utils';
    import Guard from './Guard.svelte';

    let hasGuards = $derived(getGuardsList());
</script>

<div class="has-guards">
    {#each hasGuards as g}
        <Guard {g} />
    {/each}
</div>

<style>
    .has-guards {
        display: flex;
        gap: 24px;
        max-width: 100%;
        overflow-x: auto;
        padding: 12px;
        margin: 24px 0;
    }
</style>
