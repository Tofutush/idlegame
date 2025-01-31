<script lang="ts">
    import toast from 'svelte-5-french-toast';
    import gameState from '../classes/gameState.svelte';
    import Modal from './Modal.svelte';

    let modalShown = $state(false);
    let amountToSell = $state(0);
    // svelte-ignore non_reactive_update
    let rocks: number;

    function sellRocks() {
        if (gameState.rocks >= amountToSell) {
            gameState.bucks += amountToSell;
            gameState.rocks -= amountToSell;
        }
        hideModal();
    }

    function showModal() {
        rocks = gameState.rocks;
        amountToSell = 0;
        modalShown = true;
    }

    function hideModal() {
        modalShown = false;
    }

    function handleClick() {
        if (gameState.rocks <= 0) {
            toast.error('You have no rocks to sell!', {
                position: 'top-right',
            });
        } else {
            showModal();
        }
    }

    function setMax() {
        amountToSell = rocks;
    }
</script>

<div class="buck-exchange">
    <button onclick={handleClick}>Sell rocks!</button>
</div>

<Modal show={modalShown} hide={hideModal}>
    <p>Sell rocks!</p>
    <input type="range" bind:value={amountToSell} min="0" max={rocks} />
    <button onclick={setMax}>Max</button>
    <p>Exchange {amountToSell} rocks for {amountToSell} bucks</p>
    <button onclick={sellRocks}>Sell!</button>
</Modal>
