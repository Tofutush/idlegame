<script lang="ts">
    import toast from 'svelte-5-french-toast';
    import { _ } from 'svelte-i18n';
    import gameState from '../classes/gameState.svelte';
    import Modal from './Modal.svelte';
    import type Prisoner from '../classes/Prisoner.svelte';

    let { p }: { p: Prisoner } = $props();
    let modalShown = $state(false);
    let bountyGiven = $state(0);
    let chance = $derived(bountyGiven / p.bounty);
    let maxBucks = $derived(Math.min(p.bounty, gameState.bucks));

    function showModal() {
        if (gameState.bucks > 0) {
            bountyGiven = 0;
            modalShown = true;
        } else toast.error($_('notEnoughMoney'), { position: 'bottom-right' });
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
                { position: 'bottom-right' },
            );
            gameState.prisoners.push(p.name);
        } else {
            toast.error(
                $_('escapedPrisoner', {
                    values: { name: $_('names.' + p.name) },
                }),
                { position: 'bottom-right' },
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
    <h3 style="color: {p.color}">{$_('names.' + p.name)}</h3>
    <p>
        {$_('100catchBounty', {
            values: { b: p.bounty },
        })}
    </p>
    <button class="clicky" onclick={showModal}>{$_('catchThis')}</button>
</div>
<Modal show={modalShown} hide={hideModal}>
    <h1>Catch <span style="color: {p.color}">{p.name}</span></h1>
    <p><span style="color: {p.color}">{p.name}</span> will definitely be caught if the bounty is ฿{p.bounty}. But you can try a smaller bounty and risk it!</p>
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
