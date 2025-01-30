<script lang="ts">
    let { show, hide, children } = $props();
</script>

{#if show}
    <div class="modal-bg">
        <div class="modal">
            <button onclick={hide}>x</button>
            {@render children()}
        </div>
    </div>
{/if}

<style>
    .modal-bg {
        width: 100%;
        height: 100%;
        background-color: #0001;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        background-color: #fff;
        width: 800px;
        height: 600px;
    }
</style>
