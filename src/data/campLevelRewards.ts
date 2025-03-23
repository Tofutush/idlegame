import gameState from "../classes/gameState.svelte";

const campLevelRewards = function (level: number) {
    switch (level) {
        case 2:
            gameState.exchangeRate = 2;
            break;
        case 3:
            gameState.bucks *= 2;
            break;
        default:
            gameState.exchangeRate = level;
    }
}
export default campLevelRewards;