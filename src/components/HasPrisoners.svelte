<script lang="ts">
    import { getPrisonersList } from '../utils';
    import Prisoner from './Prisoner.svelte';

    let hasPrisoners = $derived(getPrisonersList());
</script>

<div class="has-prisoners">
    {#each hasPrisoners as p}
        <Prisoner {p} />
    {/each}
</div>

<style>
    .has-prisoners {
        display: flex;
        gap: 24px;
        max-width: 100%;
        overflow-x: auto;
        padding: 12px;
        margin: 24px 0;
        scrollbar-width: none;
    }
</style>
