<script lang="ts">
    import { getNotHavePrisonersList } from '../utils';
    import BountyOfOne from './BountyOfOne.svelte';

    let notHadPrisoners = getNotHavePrisonersList();
</script>

<div class="bounty-list">
    {#each notHadPrisoners as p}
        <BountyOfOne {p} />
    {/each}
</div>
