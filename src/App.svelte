<script lang="ts">
    import { Toaster } from 'svelte-5-french-toast';
    import BountyButton from './components/BountyButton.svelte';
    import BuckRockCount from './components/BuckRockCount.svelte';
    import HasPrisoners from './components/HasPrisoners.svelte';
    import InfoButton from './components/InfoButton.svelte';
    import QuotaBar from './components/QuotaBar.svelte';
    import SellAllRocks from './components/SellAllRocks.svelte';
    import ExportGame from './components/ExportGame.svelte';
    import SellRocks from './components/SellRocks.svelte';
    import StoryButton from './components/StoryButton.svelte';
    import HasGuards from './components/HasGuards.svelte';
    import Modal from './components/Modal.svelte';

    let showModal = $state(true);
</script>

<Toaster />
<main>
    <Modal show={showModal} hide={() => (showModal = false)}>
        <p>You can export your bucks, rocks, prisoners and camp level now, but not anything else and you can't load the game progress either... Sorry about that! :P</p>
        <p>- TheOliveOli</p>
    </Modal>
    <header class="header">
        <div class="count">
            <BuckRockCount />
        </div>
        <div class="middle">
            <QuotaBar />
            <div class="buttons">
                <SellRocks />
                <SellAllRocks />
                <BountyButton />
                <StoryButton />
                <ExportGame />
            </div>
        </div>
    </header>
    <div class="menu"><InfoButton /></div>
    <HasPrisoners />
    <HasGuards />
</main>

<style>
    .header {
        display: flex;
        gap: 24px;
        align-items: stretch;
    }
    .count {
        width: 240px;
    }
    .middle {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px 0;
    }
    .buttons {
        display: flex;
        gap: 12px;
    }
    .menu {
        position: fixed;
        top: 12px;
        right: 12px;
    }
</style>
