<script lang="ts">
    import toast from 'svelte-5-french-toast';
    import gameState from '../classes/gameState.svelte';
    import { sellRocks } from '../utils';

    function sellAll() {
        if (gameState.rocks > 0) sellRocks(gameState.rocks);
        else toast.error("You don't have enough rocks!");
    }
</script>

<button class="clicky" onclick={sellAll}>Sell all rocks!</button>

<style>
    button {
        --c: var(--orange);
    }
</style>
