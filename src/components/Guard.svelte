<script lang="ts">
    import getImage from '../assets';
    import gameState from '../classes/gameState.svelte';
    import type Guard from '../classes/Guard';

    let { g }: { g: Guard } = $props();

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

    function talk() {}
</script>

<div class="guard">
    <div style="color: {g.color}">{g.name}</div>
    {#if imgLoaded}
        <img src={img} alt={g.name} />
    {/if}
    <button class="clicky" onclick={talk}>Talk</button>
</div>
