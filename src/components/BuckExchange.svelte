<script>
    import gameState from "../classes/gameState.svelte";
    import Modal from "./Modal.svelte";
    let modalShown = $state(false);

    let amountToSell = $state(0);

    function sellRocks() {
        if (gameState.rocks >= amountToSell) {
            gameState.bucks += amountToSell;
            gameState.rocks -= amountToSell;
        }
        hideModal();
    }

    function showModal() {
        modalShown = true;
    }

    function hideModal() {
        modalShown = false;
    }
</script>

<div class="buck-exchange">
    <button onclick={showModal}>Sell rocks!</button>
</div>

<Modal show={modalShown} hide={hideModal}>
    <p>Sell rocks!</p>
    <input
        type="range"
        bind:value={amountToSell}
        min="0"
        max={gameState.rocks}
    />
    <p>Exchange {amountToSell} rocks for {amountToSell} bucks</p>
    <button onclick={sellRocks}>Sell!</button>
</Modal>
