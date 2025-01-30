<script lang="ts">
    import gameState from '../classes/gameState.svelte';
    let progress = $derived(Math.min(gameState.rocks / gameState.quota, 1));
    let filledQuotaWidth = $derived(progress * 500 + 'px');
</script>

<div class="quota-meter">
    <div class="filled-quota" style="width: {filledQuotaWidth}"></div>
</div>
<div class="quota-progress">{gameState.rocks} / {gameState.quota}</div>

<style>
    .quota-meter {
        width: 500px;
        height: 20px;
        background-color: #0001;
    }
    .filled-quota {
        height: 100%;
        background-color: #0001;
    }
</style>
