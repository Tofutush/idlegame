import type { PrisonerProps } from "../types";
import Character from "./Character";

class Prisoner extends Character {
    bounty = $state<number>(0);
    efficiency = $state<number>(0);
    levelUpCost = $state<number>(0);
    level = $state<number>(0);
    speech: Array<string> = [];
    constructor(props: PrisonerProps) {
        super(props);
        this.bounty = props.bounty;
        this.efficiency = props.efficiency;
        this.levelUpCost = props.levelUpCost;
        this.speech = props.speech;
        this.level = props.level || 0;
    }
    getAmountRocksPerSecond(): number {
        return this.efficiency * this.level;
    }
    levelUp(): void {
        this.level++;
    }
}

export default Prisoner;