<script lang="ts">
    import gameState from '../classes/gameState.svelte';
    import Modal from './Modal.svelte';
    import toast from 'svelte-5-french-toast';
    import { _ } from 'svelte-i18n';

    let { p } = $props();
    let modalShown = $state(false);
    let bountyGiven = $state(0);
    let chance = $derived(bountyGiven / p.bounty);
    let maxBucks = $derived(Math.min(p.bounty, gameState.bucks));

    function showModal() {
        if (gameState.bucks > 0) {
            bountyGiven = 0;
            modalShown = true;
        } else toast.error($_('notEnoughMoney'));
    }
    function hideModal() {
        modalShown = false;
    }
    function giveBounty() {
        if (Math.random() < chance) {
            toast.success(
                $_('caughtPrisoner', {
                    values: { name: $_('names.' + p.name) },
                }),
            );
            gameState.prisoners.push(p.name);
        } else {
            toast.error(
                $_('escapedPrisoner', {
                    values: { name: $_('names.' + p.name) },
                }),
            );
        }
        gameState.bucks -= bountyGiven;
        hideModal();
    }

    function setMax() {
        bountyGiven = maxBucks;
    }
</script>

<div class="bounty">
    <h3>{$_('names.' + p.name)}</h3>
    <p>
        {$_('100catchBounty', {
            values: { b: p.bounty },
        })}
    </p>
    <button class="clicky" onclick={showModal}>{$_('catchThis')}</button>
</div>
<Modal show={modalShown} hide={hideModal}>
    <h1>
        {$_('catchTitle', {
            values: { name: $_('names.' + p.name) },
        })}
    </h1>
    <p>
        {$_('name100catchBounty', {
            values: {
                name: $_('names.' + p.name),
                b: p.bounty,
            },
        })}
    </p>
    <p>
        {$_('bountyAmount', {
            values: {
                b: bountyGiven,
                chance: Math.round(chance * 100),
            },
        })}
    </p>
    <input bind:value={bountyGiven} type="range" min="0" max={maxBucks} />
    <button onclick={setMax}>{$_('max')}</button>
    <button class="clicky" onclick={giveBounty}>{$_('catchThis')}</button>
</Modal>
