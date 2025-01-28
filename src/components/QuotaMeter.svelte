<script lang="ts">
    import { gameState } from "../classes/gameState.svelte";
    let progress = Math.min(gameState.rocks / gameState.quota, 1);
    let filledQuotaWidth = $derived(progress * 500 + "px");
    $inspect(filledQuotaWidth);
</script>

<div class="quota-meter">
    <div class="filled-quota" style="width: {filledQuotaWidth}"></div>
</div>

<style>
    .quota-meter {
        width: 500px;
        height: 20px;
        background-color: #fff;
    }
    .filled-quota {
        height: 100%;
        background-color: #0001;
    }
</style>
