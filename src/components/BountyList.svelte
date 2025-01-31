<script lang="ts">
    import { getNotHavePrisonersList } from '../utils';
    import BountyOfOne from './BountyOfOne.svelte';

    let notHadPrisoners = $derived(getNotHavePrisonersList());
</script>

<div class="bounty-list">
    {#if notHadPrisoners.length > 0}
        {#each notHadPrisoners as p}
            <BountyOfOne {p} />
        {/each}
    {:else}
        <p>You caught them ALL!</p>
    {/if}
</div>
