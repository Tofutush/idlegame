<script lang="ts">
	import { gameState } from "../gameState.svelte";
	function addRock() {
		gameState.rocks += 1;
	}
</script>

<button onclick={addRock}>Dig</button>
