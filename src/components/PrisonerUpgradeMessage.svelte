<script lang="ts">
    let {
        name,
        color,
        level,
    }: {
        name: string;
        color: string;
        level: number;
    } = $props();
</script>

<span><span style="color: {color}">{name}</span> upgraded to level {level}!</span>
