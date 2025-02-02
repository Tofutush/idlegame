<script lang="ts">
    import { Toaster } from 'svelte-5-french-toast';
    import BountyButton from './components/BountyButton.svelte';
    import BuckCount from './components/BuckCount.svelte';
    import BuckExchange from './components/BuckExchange.svelte';
    import HasPrisoners from './components/HasPrisoners.svelte';
    import InfoButton from './components/InfoButton.svelte';
    import QuotaBar from './components/QuotaBar.svelte';
    import RockCount from './components/RockCount.svelte';
    import SellAllRocks from './components/SellAllRocks.svelte';
</script>

<Toaster />
<main>
    <header class="header">
        <div class="count">
            <BuckCount />
            <RockCount />
        </div>
        <QuotaBar />
        <InfoButton />
    </header>
    <BuckExchange />
    <SellAllRocks />
    <BountyButton />
    <HasPrisoners />
</main>

<style>
    .header {
        display: flex;
        justify-content: space-between;
    }
</style>
