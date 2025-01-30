<script lang="ts">
    import { Toaster } from 'svelte-5-french-toast';
    import BountyButton from './components/BountyButton.svelte';
    import BuckCount from './components/BuckCount.svelte';
    import BuckExchange from './components/BuckExchange.svelte';
    import Prisoner from './components/Prisoner.svelte';
    import QuotaBar from './components/QuotaBar.svelte';
    import RockCount from './components/RockCount.svelte';
</script>

<Toaster />
<main>
    <BuckCount />
    <RockCount />
    <BuckExchange />
    <QuotaBar />
    <BountyButton />
    <Prisoner name="Tomato" />
    <Prisoner name="Tephra" />
</main>

<style>
</style>
