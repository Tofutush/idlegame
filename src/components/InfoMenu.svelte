<script lang="ts">
    import Modal from './Modal.svelte';
    import SwitchLocale from './SwitchLocale.svelte';
    import { _ } from 'svelte-i18n';

    let aboutModal = $state(false);
    function openAbout() {
        aboutModal = true;
    }
    function hideAbout() {
        aboutModal = false;
    }

    let creditModal = $state(false);
    function openCredit() {
        creditModal = true;
    }
    function hideCredit() {
        creditModal = false;
    }
</script>

<button onclick={openAbout}>{$_('about')}</button>
<button onclick={openCredit}>{$_('credits')}</button>
<SwitchLocale />
<Modal show={aboutModal} hide={hideAbout}>
    <h1>{$_('about')}</h1>
    <h2>{$_('title')}</h2>
    <p>{$_('aboutText.1')}</p>
    <p>{$_('aboutText.2')}</p>
</Modal>
<Modal show={creditModal} hide={hideCredit}>
    <h1>{$_('credits')}</h1>
    <p>Toast notifications by <a href="https://github.com/anatoliy-t7/svelte-5-french-toast">anatoliy-t7</a>.</p>
</Modal>
