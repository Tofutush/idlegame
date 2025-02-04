<script lang="ts">
    import toast from 'svelte-5-french-toast';
    import { _ } from 'svelte-i18n';
    import gameState from '../classes/gameState.svelte';
    import BountyList from './BountyList.svelte';
    import Modal from './Modal.svelte';

    let modalShown = $state(false);

    function showModal() {
        if (gameState.bucks > 0) modalShown = true;
        else toast.error($_('notEnoughMoney'));
    }

    export function hideBountyModal() {
        modalShown = false;
    }
</script>

<button class="clicky" onclick={showModal}>{$_('catchPrisoners')}</button>

<Modal show={modalShown} hide={hideBountyModal}>
    <h1>{$_('catchPrisoners')}</h1>
    <BountyList />
</Modal>
