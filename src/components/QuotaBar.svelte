<script>
    import toast from 'svelte-5-french-toast';
    import gameState from '../classes/gameState.svelte';
    import QuotaMeter from './QuotaMeter.svelte';

    function submit() {
        if (gameState.rocks >= gameState.quota) {
            gameState.rocks -= gameState.quota;
            gameState.level++;
            toast.success(`Camp upgraded to level ${gameState.level}!`);
            gameState.quota = Math.round(gameState.quota * 1.5);
        } else {
            toast.error('Not enough rocks!');
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
