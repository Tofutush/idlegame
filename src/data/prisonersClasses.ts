import Prisoner from "../classes/Prisoner.svelte";
import type { CharacterProps } from "../types";
import prisonerList from './prisoners.json';

let prisonerClassList: Array<Prisoner> = [];
for (let z = 0; z < prisonerList.length; z++) {
    if (prisonerClassList.some(p => p.name === prisonerList[z].name)) throw new Error(`duplicate prisoners ${prisonerList[z].name}`);
    prisonerClassList.push(new Prisoner({
        efficiency: z + 1,
        bounty: Math.round(z == 0 ? 0 : 50 * Math.pow(1.4, z - 1)),
        levelUpCost: (z + 1) * 5,
        level: 0,
        ...prisonerList[z] as CharacterProps
    }));
}
export default prisonerClassList;