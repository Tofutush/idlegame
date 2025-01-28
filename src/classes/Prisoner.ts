import type { PrisonerProps } from "../types/types";
import Character from "./Character";

class Prisoner extends Character {
    bounty: number;
    efficiency: number;
    levelUpCost: number;
    autoClickCost: number;
    level: number;
    autoClickLevel: number;
    constructor(props: PrisonerProps) {
        super(props);
        this.bounty = props.bounty;
        this.efficiency = props.efficiency;
        this.levelUpCost = props.levelUpCost;
        this.autoClickCost = props.autoClickCost;
        this.level = props.level || 1;
        this.autoClickLevel = props.autoClickLevel || 0;
    }
    getAmountRocksPerClick(): number {
        return this.efficiency * this.level;
    }
    getAmountRocksPerSecond(): number {
        return this.efficiency * this.autoClickLevel;
    }
    levelUp(): void {
        this.level++;
    }
    levelAutoClickUp(): void {
        this.autoClickLevel++;
    }
}

export default Prisoner;