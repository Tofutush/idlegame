<script lang="ts">
    import gameState from '../classes/gameState.svelte';
    import BountyList from './BountyList.svelte';
    import Modal from './Modal.svelte';
    import toast from 'svelte-5-french-toast';

    let modalShown = $state(false);

    function showModal() {
        if (gameState.bucks > 0) modalShown = true;
        else toast.error("You have no bucks! You can't afford it!");
    }

    function hideModal() {
        modalShown = false;
    }
</script>

<button onclick={showModal}>Catch prisoners!</button>

<Modal show={modalShown} hide={hideModal}>
    <h1>Catch prisoners</h1>
    <BountyList />
</Modal>
