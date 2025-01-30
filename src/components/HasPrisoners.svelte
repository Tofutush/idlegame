<script lang="ts">
    import { getPrisonersList } from '../utils';
    import Prisoner from './Prisoner.svelte';

    let hasPrisoners = getPrisonersList();
</script>

<div class="has-prisoners">
    {#each hasPrisoners as p}
        <Prisoner p={p} />
    {/each}
</div>
