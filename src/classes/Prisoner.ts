import type { PrisonerProps } from "../types";
import Character from "./Character";

class Prisoner extends Character {
    bounty: number;
    efficiency: number;
    levelUpCost: number;
    level: number;
    speech: Array<string>;
    constructor(props: PrisonerProps) {
        super(props);
        this.bounty = props.bounty;
        this.efficiency = props.efficiency;
        this.levelUpCost = props.levelUpCost;
        this.speech = props.speech;
        this.level = props.level || 1;
    }
    getAmountRocksPerSecond(): number {
        return this.efficiency * this.level;
    }
    levelUp(): void {
        this.level++;
    }
}

export default Prisoner;