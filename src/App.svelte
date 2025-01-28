<script lang="ts">
    import Prisoner from "./components/Prisoner.svelte";
    import { gameState } from "./classes/gameState.svelte";
    import QuotaMeter from "./components/QuotaMeter.svelte";
</script>

<main>
    <QuotaMeter />
    <p>Rocks: {gameState.rocks}</p>
    <Prisoner name="Tomato" />
    <Prisoner name="Tephra" />
</main>

<style>
</style>
