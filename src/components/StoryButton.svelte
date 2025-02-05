<script lang="ts">
    import Modal from './Modal.svelte';

    let modalShown = $state(false);

    function showModal() {
        modalShown = true;
    }
    function hideModal() {
        modalShown = false;
    }
</script>

<button class="clicky" onclick={showModal}>Read diary!</button>
<Modal show={modalShown} hide={hideModal}>
    <h1>Camp warden diaries</h1>
    <p>asd as da sd asd as da sd a sd d</p>
    <p>asd as da sd asd as da sd a sd d</p>
    <p>asd as da sd asd as da sd a sd d</p>
    <p>asd as da sd asd as da sd a sd d</p>
    <p>asd as da sd asd as da sd a sd d</p>
    <p>asd as da sd asd as da sd a sd d</p>
    <p>asd as da sd asd as da sd a sd d</p>
    <p>asd as da sd asd as da sd a sd d</p>
    <p>asd as da sd asd as da sd a sd d</p>
    <p>asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d asd as da sd asd as da sd a sd d</p>
</Modal>

<style>
    button {
        --c: var(--blue);
    }
</style>
