<script>
    import gameState from '../classes/gameState.svelte';
</script>

<div class="count">฿{gameState.bucks}</div>
<div class="count">Rocks: {gameState.rocks}</div>

<style>
    .count {
        background-color: var(--c);
        color: var(--bg);
        padding: 24px;
        margin: 12px;
    }
</style>
