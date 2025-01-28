<script lang="ts">
    import { gameState } from "../classes/gameState.svelte";
    import prisonersList from "../data/prisoners.json";
    import svelteLogo from "../assets/svelte.svg";
    let { name } = $props();
    let prisoner;
    for (let z = 0; z < prisonersList.length; z++) {
        if (prisonersList[z].name === name) {
            prisoner = prisonersList[z];
            break;
        }
    }
    if (!prisoner) throw new Error(`prisoner ${name} not found`);
    function addRock() {
        gameState.rocks += 1;
    }
</script>

<div class="prisoner">
    <img src={svelteLogo} alt="placeholder" />
    <button onclick={addRock}>Dig</button>
</div>
