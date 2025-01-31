import Prisoner from "../classes/Prisoner";
import type { PrisonerProps } from "../types";
import prisonerList from './prisoners.json';

let prisonerClassList: Array<Prisoner> = [];
for (let z = 0; z < prisonerList.length; z++) {
    prisonerClassList.push(new Prisoner(prisonerList[z] as PrisonerProps));
}
export default prisonerClassList;