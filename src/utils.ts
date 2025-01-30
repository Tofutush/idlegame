import gameState from './classes/gameState.svelte';
import prisonerList from './data/prisoners.json';

function findPrisoner(name: string) {
    for (let z = 0; z < prisonerList.length; z++) {
        if (prisonerList[z].name === name) {
            return prisonerList[z];
        }
    }
    throw new Error(`prisoner ${name} not found`);
}

function getPrisonersList() {
    return prisonerList.filter(p => gameState.prisoners.includes(p.name));
}

function getNotHavePrisonersList() {
    return prisonerList.filter(p => !gameState.prisoners.includes(p.name));
}

function getRandomInArray(arr: Array<any>) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export { findPrisoner, getNotHavePrisonersList, getPrisonersList, getRandomInArray };

