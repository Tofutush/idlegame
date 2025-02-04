<script lang="ts">
    import toast from 'svelte-5-french-toast';
    import { _ } from 'svelte-i18n';
    import gameState from '../classes/gameState.svelte';
    import { calcHowManyBucks, sellRocks } from '../utils';
    import Modal from './Modal.svelte';

    let modalShown = $state(false);
    let amountToSell = $state(0);
    // svelte-ignore non_reactive_update
    let rocks: number;

    function handleSellRocks() {
        sellRocks(amountToSell);
        hideModal();
    }

    function showModal() {
        rocks = gameState.rocks;
        amountToSell = 0;
        modalShown = true;
    }

    function hideModal() {
        modalShown = false;
    }

    function handleClick() {
        if (gameState.rocks <= 0) {
            toast.error($_('notEnoughRocks'));
        } else {
            showModal();
        }
    }

    function setMax() {
        amountToSell = rocks;
    }
</script>

<div class="buck-exchange">
    <button class="clicky" onclick={handleClick}>{$_('sellRocks')}</button>
</div>

<Modal show={modalShown} hide={hideModal}>
    <p>{$_('sellRocks')}</p>
    <input type="range" bind:value={amountToSell} min="0" max={rocks} />
    <button onclick={setMax}>{$_('max')}</button>
    <p>
        {$_('sellRocksDesc', {
            values: {
                r: amountToSell,
                b: calcHowManyBucks(amountToSell),
            },
        })}
    </p>
    <button class="clicky" onclick={handleSellRocks}>{$_('sellRocks')}</button>
</Modal>
