<script lang="ts">
    import toast from 'svelte-5-french-toast';
    import gameState from '../classes/gameState.svelte';
    import { expGameState } from '../utils'
    function expGame() {
        let gameExpTxt;
        gameExpTxt = String (expGameState());
        toast.success(gameExpTxt, {position: 'bottom-right'});
    }
</script>

<button class="clicky" onclick={expGame}>Export game state</button>

<style>
    button {
        --c: var(--orange);
    }
</style>
