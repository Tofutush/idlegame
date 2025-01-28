<script lang="ts">
    import Prisoner from "./components/Prisoner.svelte";
    import { gameState } from "./classes/gameState.svelte";
    import QuotaMeter from "./components/QuotaMeter.svelte";
</script>

<main>
    <QuotaMeter />
    <p>Rocks: {gameState.rocks}</p>
    <Prisoner />
    <Prisoner />
    <Prisoner />
    <Prisoner />
</main>

<style>
</style>
