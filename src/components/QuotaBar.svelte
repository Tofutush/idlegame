<script>
    import gameState from '../classes/gameState.svelte';
    import QuotaMeter from './QuotaMeter.svelte';

    function submit() {
        if (gameState.rocks >= gameState.quota) {
            gameState.rocks -= gameState.quota;
            gameState.level++;
            gameState.quota = Math.round(gameState.quota * 1.5);
        }
    }
</script>

<div class="quota-bar">
    <p>Camp level: {gameState.level}</p>
    <QuotaMeter />
    <button onclick={submit}>Submit</button>
</div>
