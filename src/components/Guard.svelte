<script lang="ts">
    import getImage from '../assets';
    import gameState from '../classes/gameState.svelte';
    import type Guard from '../classes/Guard';
    import SpeechBubbleClass from '../classes/SpeechBubble.svelte';
    import SpeechBubble from './SpeechBubble.svelte';

    let { g }: { g: Guard } = $props();
    let bubbleShown = $state(false);

    let img = $state('');
    let imgLoaded = $state(false);
    async function preloadImages() {
        try {
            img = await getImage(`${g.name.toLowerCase()}`);
            imgLoaded = true;
        } catch (e) {
            img = await getImage('prisoner placeholder');
            imgLoaded = true;
        }
    }
    preloadImages();

    setInterval(() => {
        gameState.rocks += g.getRPS();
    }, 1000);

    let speechBubble = new SpeechBubbleClass({
        speechList: g.speech,
        showFunc: () => (bubbleShown = true),
        hideFunc: () => (bubbleShown = false),
    });
    function talk() {
        speechBubble.showBubble();
    }
</script>

<div class="guard">
    <div style="color: {g.color}; font-weight: bold;">{g.name}</div>
    {#if imgLoaded}
        <img src={img} alt={g.name} style="height: 200px" />
    {/if}
    <button class="clicky" onclick={talk}>Talk</button>
    <SpeechBubble show={bubbleShown} color={g.color} text={speechBubble.speech} />
</div>

<style>
    .guard {
        width: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
</style>
