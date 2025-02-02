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
        <InfoButton />
    </header>
    <div class="quota-bar">
        <QuotaBar />
    </div>
    <BuckExchange />
    <SellAllRocks />
    <BountyButton />
    <HasPrisoners />
</main>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .quota-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>
