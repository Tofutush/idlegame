import { findPrisoner } from "../utils";
import Prisoner from "./Prisoner";

interface GameState {
    rocks: number;
    bucks: number;
    level: number;
    quota: number;
    prisoners: Array<string>;
    guards: number;
}
let gameState: GameState = $state({
    rocks: 0,
    bucks: 0,
    level: 1,
    quota: 100,
    prisoners: ['Tomato'],
    guards: 0
});
export default gameState;