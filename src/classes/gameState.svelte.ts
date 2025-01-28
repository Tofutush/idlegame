interface GameState {
    rocks: number;
    bucks: number;
    level: number;
    quota: number;
    prisoners: number;
    guards: number;
}
export const gameState: GameState = $state({
    rocks: 0,
    bucks: 0,
    level: 1,
    quota: 100,
    prisoners: 0,
    guards: 0
});