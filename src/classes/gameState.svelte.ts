// wow. i guess this is what they call. a SINGLETON
class GameState {
    rocks = $state(0);
    bucks = $state(0);
    level = $state(1);
    exchangeRate = $state(1);
    prisoners = $state(['Jerboa']);
    guards: Array<string> = $state([]);
    getQuota() {
        return Math.round(100 * Math.pow(1.5, this.level - 1));
    }
}
let gameState = new GameState();
export default gameState;