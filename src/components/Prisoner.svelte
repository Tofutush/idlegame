<script lang="ts">
    import toast from 'svelte-5-french-toast';
    import gameState from '../classes/gameState.svelte';
    import type Prisoner from '../classes/Prisoner.svelte';
    import { getRandomInArrayExcept } from '../utils';
    import SpeechBubble from './SpeechBubble.svelte';
    import getImage from '../assets';
    import SpeechBubbleClass from '../classes/SpeechBubble.svelte';

    let { p }: { p: Prisoner } = $props();

    // state vars
    let bubbleShown = $state(false);
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
        speechBubble.showBubble();
    }

    // auto dig
    setInterval(() => {
        gameState.rocks += p.getRPS();
    }, 1000);

    let digGifInterval = setInterval(
        () => {
            if (p.level !== 0) isDigging = !isDigging;
        },
        Math.max(50, 1000 / p.level),
    );

    // bubble
    let speechBubble = new SpeechBubbleClass({
        speechList: p.speech,
        hideFunc: () => (bubbleShown = false),
        showFunc: () => (bubbleShown = true),
    });
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
    <SpeechBubble show={bubbleShown} color={p.color} text={speechBubble.speech} />
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
</style>
