<script lang="ts">
    import Modal from './Modal.svelte';
    import SwitchLocale from './SwitchLocale.svelte';

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

<button onclick={openAbout}>About</button>
<button onclick={openCredit}>Credits</button>
<SwitchLocale />
<Modal show={aboutModal} hide={hideAbout}>
    <h1>About</h1>
    <h2>Idle Forced Labor Camp, an Incremental Game</h2>
    <p>Dig rocks. Sell them into bucks. Fulfill quotas from above. Catch more prisoners and make them work night and day. Hire guards. Grow your camp. Truly the Bauhinian experience.</p>
    <p>may sound hellish, but thats what im going for</p>
</Modal>
<Modal show={creditModal} hide={hideCredit}>
    <h1>Credits</h1>
    <p>Toast notifications by <a href="https://github.com/anatoliy-t7/svelte-5-french-toast">anatoliy-t7</a>.</p>
</Modal>
