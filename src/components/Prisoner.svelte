<script lang="ts">
    import toast from 'svelte-5-french-toast';
    import svelteLogo from '../assets/svelte.svg';
    import gameState from '../classes/gameState.svelte';
    import { getRandomInArray, getRandomInArrayExcept } from '../utils';
    import SpeechBubble from './SpeechBubble.svelte';
    import type Prisoner from '../classes/Prisoner.svelte';

    let { p }: { p: Prisoner } = $props();

    // state vars
    let bubbleShown = $state(false);
    let speech = $state('');
    let lastSpeech = $state('');

    // events
    function levelUp() {
        if (gameState.bucks >= p.getLevelUpCost()) {
            gameState.bucks -= p.getLevelUpCost();
            p.levelUp();
        } else {
            toast.error('Not enough money!');
        }
    }

    function digRock() {
        gameState.rocks += p.efficiency;
        showSpeechBubble();
    }

    function autoDigRock() {
        gameState.rocks += p.getAmountRocksPerSecond();
    }
    setInterval(autoDigRock, 1000);

    let bubbleTimeout = setTimeout(() => (bubbleShown = false), 3000);
    function showSpeechBubble() {
        clearTimeout(bubbleTimeout);
        speech = lastSpeech = getRandomInArrayExcept(p.speech, [lastSpeech]);
        bubbleShown = true;
        bubbleTimeout = setTimeout(() => (bubbleShown = false), 3000);
    }
</script>

<div class="prisoner">
    <p>{p.name}</p>
    <SpeechBubble show={bubbleShown}>{speech}</SpeechBubble>
    <img src={svelteLogo} alt="placeholder" />
    <p>Level: {p.level}</p>
    <button class="clicky" onclick={digRock}>Dig</button>
    <button class="clicky" onclick={levelUp}>Level Up (cost: {p.getLevelUpCost()})</button>
</div>
