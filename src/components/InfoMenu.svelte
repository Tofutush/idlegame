<script lang="ts">
    import Modal from './Modal.svelte';

    let aboutModal = $state(false);
    function openAbout() {
        aboutModal = true;
    }
    function hideAbout() {
        aboutModal = false;
    }
</script>

<button onclick={openAbout}>About</button>
<Modal show={aboutModal} hide={hideAbout}>
    <h1>About</h1>
    <h2>Idle Forced Labor Camp, an Incremental Game</h2>
    <p>Dig rocks. Sell them into bucks. Fulfill quotas from above. Catch more prisoners and make them work night and day. Hire guards. Grow your camp. Truly the Bauhinian experience.</p>
    <p>may sound hellish, but thats what im going for</p>
</Modal>
