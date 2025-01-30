<script lang="ts">
    import { getNotHavePrisonersList } from '../utils';

    let notHadPrisoners = getNotHavePrisonersList();
</script>

<div class="bounty-list">
    {#each notHadPrisoners as p}
        <div class="bounty">
            <h3>{p.name}</h3>
            <p>Will 100% catch if bounty is {p.bounty} bucks.</p>
        </div>
    {/each}
</div>
