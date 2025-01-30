import type { CharacterProps } from "../types";
class Character {
    name: string;
    color: string;
    constructor(props: CharacterProps) {
        this.name = props.name
        this.color = props.color
    }
    identicalTo(another: Character) {
        // only checks name! dont fucking make 2 characters of the same name. please
        return this.name === another.name;
    }
}
export default Character;