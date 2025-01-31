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

    function showSpeechBubble() {
        if (bubbleShown !== true) {
            console.log(p, p.speech);
            
            speech = getRandomInArray(p.speech);
            bubbleShown = true;
            setTimeout(() => {
                bubbleShown = false;
            }, 3000);
        }
    }
</script>

<div class="prisoner">
    <p>{p.name}</p>
    <button onclick={showSpeechBubble}>
        <SpeechBubble show={bubbleShown}>{speech}</SpeechBubble>
        <img src={svelteLogo} alt="placeholder" />
    </button>
    <p>Level: {level}</p>
    <p>Auto click: {autoClickLevel}</p>
    <button onclick={digRock}>Dig</button>
    <button onclick={levelUp}>Level Up (cost: {p.levelUpCost})</button>
    <button onclick={levelAutoClickUp}>Stop slacking (cost: {p.autoClickCost})</button>
</div>
