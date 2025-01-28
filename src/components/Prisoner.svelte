<script lang="ts">
    import { gameState } from "../classes/gameState.svelte";
    import prisonersList from "../data/prisoners.json";
    import svelteLogo from "../assets/svelte.svg";
    import type { PrisonerProps } from "../types/types";
    import findPrisoner from "../utils/findPrisoner";

    let { name } = $props();

    // find the character
    let p = findPrisoner(name);
    if (!p) throw new Error(`prisoner ${name} not found`);

    // state vars

    let level = $state(1);
    let autoClickLevel = $state(0);

    // getters

    function getAmountRocksPerClick(): number {
        return p.efficiency * level;
    }

    // events
    function digRock() {
        gameState.rocks += getAmountRocksPerClick();
    }
    function levelUp() {
        if (gameState.rocks > p.levelUpCost) {
            gameState.rocks -= p.levelUpCost;
            level++;
        }
    }
    function levelAutoClickUp() {
        if (gameState.rocks > p.autoClickCost) {
            gameState.rocks -= p.autoClickCost;
            autoClickLevel++;
        }
    }
</script>

<div class="prisoner">
    <img src={svelteLogo} alt="placeholder" />
    <p>Level: {level}</p>
    <p>Auto click: {autoClickLevel}</p>
    <button onclick={digRock}>Dig</button>
    <button onclick={levelUp}>Level Up (cost: {p.levelUpCost})</button>
    <button onclick={levelAutoClickUp}>Stop slacking (cost: {p.autoClickCost})</button>
</div>
