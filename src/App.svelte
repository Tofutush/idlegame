<script lang="ts">
    import { Toaster } from 'svelte-5-french-toast';
    import BountyButton from './components/BountyButton.svelte';
    import BuckCount from './components/BuckCount.svelte';
    import BuckExchange from './components/BuckExchange.svelte';
    import HasPrisoners from './components/HasPrisoners.svelte';
    import QuotaBar from './components/QuotaBar.svelte';
    import RockCount from './components/RockCount.svelte';
    import InfoButton from './components/InfoButton.svelte';
    import SellAllRocks from './components/SellAllRocks.svelte';
</script>

<Toaster />
<main>
    <InfoButton />
    <BuckCount />
    <RockCount />
    <BuckExchange />
    <SellAllRocks />
    <QuotaBar />
    <BountyButton />
    <HasPrisoners />
</main>

<style>
</style>
