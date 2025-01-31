import gameState from './classes/gameState.svelte';
import prisonerClassList from './data/prisonersClasses';

function findPrisoner(name: string) {
    for (let z = 0; z < prisonerClassList.length; z++) {
        if (prisonerClassList[z].name === name) {
            return prisonerClassList[z];
        }
    }
    throw new Error(`prisoner ${name} not found`);
}

function getPrisonersList() {
    return prisonerClassList.filter(p => gameState.prisoners.includes(p.name));
}

function getNotHavePrisonersList() {
    return prisonerClassList.filter(p => !gameState.prisoners.includes(p.name));
}

function getRandomInArray(arr: Array<any>) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export { findPrisoner, getNotHavePrisonersList, getPrisonersList, getRandomInArray };

