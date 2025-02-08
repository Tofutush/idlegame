import Guard from "../classes/Guard";
import guardsList from './guards.json';

let guardClassList: Array<Guard> = [];
for (let z = 0; z < guardsList.length; z++) {
    guardClassList.push(new Guard(guardsList[z]));
}
export default guardClassList;