<script lang="ts">
    import toast from 'svelte-5-french-toast';
    import svelteLogo from '../assets/svelte.svg';
    import gameState from '../classes/gameState.svelte';
    import { getRandomInArray } from '../utils';
    import SpeechBubble from './SpeechBubble.svelte';

    let { p } = $props();

    // state vars
    let level = $state(1);
    let autoClickLevel = $state(0);
    let bubbleShown = $state(false);
    let speech = $state('');

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
        if (gameState.bucks >= p.levelUpCost) {
            gameState.bucks -= p.levelUpCost;
            level++;
        } else {
            toast.error('Not enough money!', {
                position: 'top-right',
            });
        }
    }
    function levelAutoClickUp() {
        if (gameState.bucks >= p.autoClickCost) {
            gameState.bucks -= p.autoClickCost;
            autoClickLevel++;
        } else {
            toast.error('Not enough money!', {
                position: 'top-right',
            });
        }
    }

    function autoDigRock() {
        gameState.rocks += getRocksPerSecond();
    }
    setInterval(autoDigRock, 1000);

    let bubbleTimeout = setTimeout(() => (bubbleShown = false), 3000);
    function showSpeechBubble() {
        clearTimeout(bubbleTimeout);
        speech = getRandomInArray(p.speech);
        bubbleShown = true;
        bubbleTimeout = setTimeout(() => (bubbleShown = false), 3000);
    }
</script>

<div class="prisoner">
    <p>{p.name}</p>
    <SpeechBubble show={bubbleShown}>{speech}</SpeechBubble>
    <img src={svelteLogo} alt="placeholder" />
    <p>Level: {level}</p>
    <p>Auto click: {autoClickLevel}</p>
    <button
        class="clicky"
        onclick={() => {
            digRock();
            showSpeechBubble();
        }}>Dig</button>
    <button class="clicky" onclick={levelUp}>Level Up (cost: {p.levelUpCost})</button>
    <button class="clicky" onclick={levelAutoClickUp}>Stop slacking (cost: {p.autoClickCost})</button>
</div>
