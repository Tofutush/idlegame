<script lang="ts">
	import { gameState } from "../classes/gameState.svelte";
	function addRock() {
		gameState.rocks += 1;
	}
</script>

<button onclick={addRock}>Dig</button>
