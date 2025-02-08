import type { CharacterProps } from "../types";
class Character {
    name: string;
    color: string;
    efficiency: number;
    speech: Array<string>;
    constructor(props: CharacterProps) {
        this.name = props.name
        this.color = props.color
        this.efficiency = props.efficiency;
        this.speech = props.speech;
    }
    identicalTo(another: Character) {
        // only checks name! dont fucking make 2 characters of the same name. please
        return this.name === another.name;
    }
}
export default Character;