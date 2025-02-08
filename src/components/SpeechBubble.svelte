<script lang="ts">
    let {
        show,
        color,
        text,
    }: {
        show: boolean;
        color: string;
        text: string;
    } = $props();
</script>

{#if show}
    <div class="speech-bubble" style="border-color: {color}">{text}</div>
{/if}

<style>
    .speech-bubble {
        border: 6px solid;
        text-align: center;
        border-radius: 12px;
        padding: 6px 12px;
        margin-top: 12px;
        hyphens: auto;
        position: relative;
    }
    .speech-bubble::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border: 12px solid transparent;
        border-bottom-color: inherit;
        top: -24px;
        left: 24px;
        transform: translateX(-50%);
    }
</style>
