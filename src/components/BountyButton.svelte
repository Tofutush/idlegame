<script lang="ts">
    import BountyList from './BountyList.svelte';
    import Modal from './Modal.svelte';

    let modalShown = $state(false);

    function showModal() {
        modalShown = true;
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
