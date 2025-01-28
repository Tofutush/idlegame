<script lang="ts">
    import Prisoner from "./components/Prisoner.svelte";
    import { gameState } from "./classes/gameState.svelte";
</script>

<main>
    <p>Rocks: {gameState.rocks}</p>
    <Prisoner />
    <Prisoner />
    <Prisoner />
    <Prisoner />
</main>

<style>
</style>
