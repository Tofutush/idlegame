<script>
    import gameState from "../classes/gameState.svelte";
    import Modal from "./Modal.svelte";
    let modalShown = false;

    function sellRocks() {
        gameState.bucks += gameState.rocks;
        gameState.rocks = 0;
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
</Modal>
