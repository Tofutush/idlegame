<script>
    import gameState from "../classes/gameState.svelte";

    function sellRocks() {
        gameState.bucks += gameState.rocks;
        gameState.rocks = 0;
    }
</script>

<div class="buck-exchange">
    <button onclick={sellRocks}>Sell rocks!</button>
</div>
