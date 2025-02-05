<script lang="ts">
    let { children, show }: { children: Function; show: boolean } = $props();
</script>

{#if show}
    <div class="speech-bubble">
        {@render children()}
    </div>
{/if}

<style>
    .speech-bubble {
        position: absolute;
        border: 4px solid #000;
    }
</style>
