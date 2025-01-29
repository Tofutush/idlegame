<script lang="ts">
    let { show, hide, children } = $props();
    function backgroundClick(e: MouseEvent) {
        if ((e.target as HTMLElement).classList.contains("modal-bg")) {
            hide();
        }
    }
</script>

{#if show}
    <div class="modal-bg" onclick={backgroundClick}>
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
    }
    .modal {
        background-color: #fff;
    }
</style>
