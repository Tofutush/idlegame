<script lang="ts">
    import gameState from "./classes/gameState.svelte";
    import Prisoner from "./components/Prisoner.svelte";
    import QuotaBar from "./components/QuotaBar.svelte";
</script>

<main>
    <QuotaBar />
    <p>Rocks: {gameState.rocks}</p>
    <Prisoner name="Tomato" />
    <Prisoner name="Tephra" />
</main>

<style>
</style>
