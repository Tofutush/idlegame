<script>
    import toast from 'svelte-5-french-toast';
    import gameState from '../classes/gameState.svelte';
    import QuotaMeter from './QuotaMeter.svelte';
    import campLevelRewards from '../data/campLevelRewards';

    function submit() {
        if (gameState.rocks >= gameState.getQuota()) {
            gameState.rocks -= gameState.getQuota();
            gameState.level++;
            toast.success(`Camp upgraded to level ${gameState.level}!`, { position: 'bottom-right' });
            campLevelRewards(gameState.level);
        } else {
            toast.error('Not enough rocks!', { position: 'bottom-right' });
        }
    }
</script>

<div class="quota-bar">
    <div>Camp level: {gameState.level}</div>
    <QuotaMeter />
    <button class="clicky" onclick={submit}>Submit</button>
</div>

<style>
    .quota-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
    }
</style>
