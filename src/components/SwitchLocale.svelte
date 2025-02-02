<script lang="ts">
    import { locale, locales } from 'svelte-i18n';
</script>

<p>Language:</p>
<select bind:value={$locale}>
    {#each $locales as l}
        <option value={l}>{l}</option>
    {/each}
</select>
