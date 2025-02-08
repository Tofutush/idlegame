import type { CharacterProps } from "../types";
import Character from "./Character";

type PrisonerProps = CharacterProps & {
    bounty: number,
    levelUpCost: number,
    level: number
}

class Prisoner extends Character {
    bounty = $state<number>(0);
    efficiency = $state<number>(0);
    levelUpCost = $state<number>(0);
    level = $state<number>(0);
    constructor(props: PrisonerProps) {
        super(props);
        this.bounty = props.bounty;
        this.levelUpCost = props.levelUpCost;
        this.level = props.level;
    }
    getAmountRocksPerSecond() {
        return this.efficiency * this.level;
    }
    levelUp() {
        this.level++;
    }
    getLevelUpCost() {
        return Math.round(this.levelUpCost * Math.pow(1.07, this.level - 1));
    }
}

export default Prisoner;