<script lang="ts">
    import BuckCount from "./components/BuckCount.svelte";
    import BuckExchange from "./components/BuckExchange.svelte";
    import Prisoner from "./components/Prisoner.svelte";
    import QuotaBar from "./components/QuotaBar.svelte";
    import RockCount from "./components/RockCount.svelte";
</script>

<main>
    <BuckCount />
    <RockCount />
    <BuckExchange />
    <QuotaBar />
    <Prisoner name="Tomato" />
    <Prisoner name="Tephra" />
</main>

<style>
</style>
