<script lang="ts">
    import gameState from '../classes/gameState.svelte';
    let progress = $derived(Math.min(gameState.rocks / gameState.quota, 1) * 100);
</script>

<div class="quota-meter" style="background: linear-gradient(to right, var(--gray) {progress}%, transparent {progress}%);">
    <div class="quota-progress">{gameState.rocks} / {gameState.quota}</div>
</div>

<style>
    .quota-meter {
        width: 480px;
        border: 4px solid var(--gray);
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
