class GameState {
    rocks = $state(0);
    bucks = $state(0);
    level = $state(1);
    exchangeRate = $state(1);
    prisoners = $state(['Jerboa']);
    guards = $state([]);
    getQuota() {
        return 100 * Math.pow(1.5, this.level - 1);
    }
}
let gameState = new GameState();
export default gameState;