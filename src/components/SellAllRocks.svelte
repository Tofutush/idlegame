<script lang="ts">
    import gameState from '../classes/gameState.svelte';
    import { sellRocks } from '../utils';
    import toast from 'svelte-5-french-toast';

    function sellAll() {
        if (gameState.rocks > 0) sellRocks(gameState.rocks);
        else toast.error("You don't have enough rocks!");
    }
</script>

<button onclick={sellAll}>Sell all rocks!</button>
