<script lang="ts">
    import InfoMenu from './InfoMenu.svelte';
    import Modal from './Modal.svelte';

    let modalShown = $state(false);

    function showModal() {
        modalShown = true;
    }

    function hideModal() {
        modalShown = false;
    }
</script>

<button onclick={showModal}>Menu</button>

<Modal show={modalShown} hide={hideModal}>
    <InfoMenu />
</Modal>
