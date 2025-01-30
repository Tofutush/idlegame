<script lang="ts">
    import svelteLogo from '../assets/svelte.svg';
    import gameState from '../classes/gameState.svelte';
    import findPrisoner from '../utils/findPrisoner';

    let { name } = $props();

    // find the character
    let p = findPrisoner(name);

    // state vars
    let level = $state(1);
    let autoClickLevel = $state(0);

    // getters
    function getRocksPerClick(): number {
        return p.efficiency * level;
    }

    function getRocksPerSecond(): number {
        return p.efficiency * autoClickLevel;
    }

    // events
    function digRock() {
        gameState.rocks += getRocksPerClick();
    }
    function levelUp() {
        if (gameState.rocks >= p.levelUpCost) {
            gameState.rocks -= p.levelUpCost;
            level++;
        }
    }
    function levelAutoClickUp() {
        if (gameState.rocks >= p.autoClickCost) {
            gameState.rocks -= p.autoClickCost;
            autoClickLevel++;
        }
    }

    function autoDigRock() {
        gameState.rocks += getRocksPerSecond();
    }
    setInterval(autoDigRock, 1000);
</script>

<div class="prisoner">
    <p>{p.name}</p>
    <img src={svelteLogo} alt="placeholder" />
    <p>Level: {level}</p>
    <p>Auto click: {autoClickLevel}</p>
    <button onclick={digRock}>Dig</button>
    <button onclick={levelUp}>Level Up (cost: {p.levelUpCost})</button>
    <button onclick={levelAutoClickUp}>Stop slacking (cost: {p.autoClickCost})</button>
</div>
