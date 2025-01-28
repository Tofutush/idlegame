<script lang="ts">
    import Prisoner from "./components/Prisoner.svelte";
    import { gameState } from "./classes/gameState.svelte";
    import QuotaMeter from "./components/QuotaMeter.svelte";
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
