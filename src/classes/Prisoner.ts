import Character from "./Character";
import type { PrisonerProps } from "../types/types";

class Prisoner extends Character {
    bounty: number;
    constructor(props: PrisonerProps) {
        super(props);
        this.bounty = props.bounty;
    }
}

export default Prisoner;