<script lang="ts">
    let {
        show,
        hide,
        children,
        width = 800,
        height = 600,
    }: {
        show: boolean;
        hide: () => void;
        children: Function;
        width?: number;
        height?: number;
    } = $props();
</script>

{#if show}
    <div class="modal-bg">
        <div class="modal" style="max-width: {width}px; max-height: {height}px">
            <button class="close-button little-square" onclick={hide}>&times;</button>
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
        z-index: 998;
    }
    .modal {
        background-color: var(--bg);
        min-width: 400px;
        min-height: 300px;
        padding: 16px;
        border-radius: 12px;
        overflow-y: auto;
        z-index: 999;
    }
    .close-button {
        float: right;
        border: 0;
        position: sticky;
        top: 0;
    }
    .close-button:hover {
        background-color: #0001;
    }
</style>
