import Prisoner from "../classes/Prisoner";
import prisonerList from './prisoners.json';

let prisonerClassList: Array<Prisoner> = [];
for (let z = 0; z < prisonerList.length; z++) {
    prisonerClassList.push(new Prisoner(prisonerList[z]));
}
export default prisonerClassList;