<script lang="ts">
    import InfoMenu from './InfoMenu.svelte';
    import Modal from './Modal.svelte';
    import { _ } from 'svelte-i18n';

    let modalShown = $state(false);

    function showModal() {
        modalShown = true;
    }

    function hideModal() {
        modalShown = false;
    }
</script>

<button class="clicky little-square" onclick={showModal}>三</button>

<Modal show={modalShown} hide={hideModal}>
    <InfoMenu />
</Modal>
