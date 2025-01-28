<script lang="ts">
	import Prisoner from "./lib/Prisoner.svelte";
	import { gameState } from "./gameState.svelte";
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
