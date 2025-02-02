interface GameState {
    rocks: number;
    bucks: number;
    level: number;
    exchangeRate: number;
    quota: number;
    prisoners: Array<string>;
    guards: number;
}
let gameState: GameState = $state({
    rocks: 0,
    bucks: 0,
    level: 1,
    exchangeRate: 1,
    quota: 100,
    prisoners: ['Jerboa'],
    guards: 0
});
export default gameState;