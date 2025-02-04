<script lang="ts">
    import { _ } from 'svelte-i18n';
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
        <p>{$_('caughtThemAll')}</p>
    {/if}
</div>
