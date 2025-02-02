<script lang="ts">
    let { show, hide, children, width = 800, height = 600 } = $props();
</script>

{#if show}
    <div class="modal-bg">
        <div class="modal" style="max-width: {width}px; max-height: {height}px">
            <button class="close-button little-square" onclick={hide}>x</button>
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
        background-color: var(--bg);
        min-width: 400px;
        min-height: 300px;
        padding: 16px;
        border-radius: 12px;
    }
    .close-button {
        float: right;
        border: 0;
    }
    .close-button:hover {
        background-color: #0001;
    }
</style>
