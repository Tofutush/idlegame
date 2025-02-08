import type { CharacterProps } from "../types";
import { getPrisonersList } from "../utils";
import Character from "./Character";

class Guard extends Character {
    constructor(props: CharacterProps) {
        super(props);
    }
    getRPS() {
        let prisonerList = getPrisonersList();
        let totalRPS = 0;
        for (let z = 0; z < prisonerList.length; z++) {
            totalRPS += prisonerList[z].getRPS();
        }
        return Math.round(totalRPS * this.efficiency / 100);
    }
}
export default Guard;