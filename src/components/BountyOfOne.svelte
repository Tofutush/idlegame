<script lang="ts">
    import gameState from '../classes/gameState.svelte';
    import Modal from './Modal.svelte';
    import toast from 'svelte-5-french-toast';

    let { p } = $props();
    let modalShown = $state(false);
    let bountyGiven = $state(0);
    let chance = $derived(bountyGiven / p.bounty);
    let maxBucks = $derived(Math.min(p.bounty, gameState.bucks));

    function showModal() {
        if (gameState.bucks > 0) {
            bountyGiven = 0;
            modalShown = true;
        } else toast.error("You don't have enough money!");
    }
    function hideModal() {
        modalShown = false;
    }
    function giveBounty() {
        if (Math.random() < chance) {
            toast.success(`You caught ${p.name}!`);
            gameState.prisoners.push(p.name);
        } else {
            toast.error(`You failed. ${p.name} escaped.`);
        }
        gameState.bucks -= bountyGiven;
        hideModal();
    }

    function setMax() {
        bountyGiven = maxBucks;
    }
</script>

<div class="bounty">
    <h3>{p.name}</h3>
    <p>Will 100% catch if bounty is {p.bounty} bucks.</p>
    <button class="clicky" onclick={showModal}>Catch this fucker</button>
</div>
<Modal show={modalShown} hide={hideModal}>
    <h1>Catch {p.name}!</h1>
    <p>{p.name} will definitely be caught if the bounty is {p.bounty}. But you can try a smaller amount and risk it!</p>
    <p>You're giving a bounty of {bountyGiven}. The chance is {Math.round(chance * 100)}%.</p>
    <input bind:value={bountyGiven} type="range" min="0" max={maxBucks} />
    <button onclick={setMax}>Max</button>
    <button class="clicky" onclick={giveBounty}>Catch!</button>
</Modal>
