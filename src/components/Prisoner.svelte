<script lang="ts">
    import toast from 'svelte-5-french-toast';
    import gameState from '../classes/gameState.svelte';
    import type Prisoner from '../classes/Prisoner.svelte';
    import { getRandomInArrayExcept } from '../utils';
    import SpeechBubble from './SpeechBubble.svelte';
    import getImage from '../assets';

    let { p }: { p: Prisoner } = $props();

    // state vars
    let bubbleShown = $state(false);
    let speech = $state('');
    let lastSpeech = $state('');
    let isDigging = $state(false);

    // imgs
    let img = $state('');
    let imgDig = $state('');
    let imgLoaded = $state(false);
    let imgDigLoaded = $state(false);
    async function preloadImages() {
        try {
            img = await getImage(`${p.name.toLowerCase()} idle`);
            imgDig = await getImage(`${p.name.toLowerCase()} dig`);
            imgLoaded = true;
            imgDigLoaded = true;
        } catch (e) {
            img = await getImage('prisoner placeholder');
            imgDig = await getImage('prisoner placeholder dig');
            imgLoaded = true;
            imgDigLoaded = true;
        }
    }
    preloadImages();

    // events
    function levelUp() {
        if (gameState.bucks >= p.getLevelUpCost()) {
            gameState.bucks -= p.getLevelUpCost();
            p.levelUp();
            clearInterval(digGifInterval);
            digGifInterval = setInterval(
                () => {
                    if (p.level !== 0) isDigging = !isDigging;
                },
                Math.max(50, 1000 / p.level),
            );
        } else {
            toast.error('Not enough money!', { position: 'bottom-right' });
        }
    }

    function digRock() {
        gameState.rocks += p.efficiency;
        showSpeechBubble();
    }

    function autoDigRock() {
        gameState.rocks += p.getRPS();
    }
    setInterval(autoDigRock, 1000);
    let digGifInterval = setInterval(
        () => {
            if (p.level !== 0) isDigging = !isDigging;
        },
        Math.max(50, 1000 / p.level),
    );

    let bubbleTimeout = setTimeout(() => (bubbleShown = false), 3000);
    function showSpeechBubble() {
        clearTimeout(bubbleTimeout);
        speech = lastSpeech = getRandomInArrayExcept(p.speech, [lastSpeech]);
        bubbleShown = true;
        bubbleTimeout = setTimeout(() => (bubbleShown = false), 3000);
    }
</script>

<div class="prisoner">
    <div class="flexbox">
        <div class="left">
            <div style="color: {p.color}; font-weight: bold">{p.name}</div>
            {#if imgLoaded && imgDigLoaded}
                <img src={isDigging ? imgDig : img} alt={p.name} style="height: 200px" />
            {/if}
            <div>Level: {p.level}</div>
        </div>
        <div class="right">
            <button class="clicky" onclick={digRock} onmousedown={() => (isDigging = true)} onmouseup={() => (isDigging = false)} onmouseleave={() => (isDigging = false)}>Dig</button>
            <button class="clicky" onclick={levelUp}>Level Up</button>
            <div style="white-space: nowrap">cost: {p.getLevelUpCost()}</div>
        </div>
    </div>
    <div class="bubble" style="display: {bubbleShown ? 'block' : 'none'}; border-color: {p.color}">{speech}</div>
</div>

<style>
    .prisoner {
        width: 260px;
    }
    .flexbox {
        display: flex;
        justify-content: space-between;
    }
    .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
    .right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        gap: 6px;
    }
    .bubble {
        border: 6px solid;
        text-align: center;
        border-radius: 12px;
        padding: 6px 12px;
        margin-top: 12px;
        hyphens: auto;
        position: relative;
    }
    .bubble::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: inherit;
        top: -24px;
        left: 24px;
        transform: translateX(-50%);
    }
</style>
