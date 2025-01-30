import prisonerList from './data/prisoners.json';
import type { PrisonerProps } from './types';

function findPrisoner(name: string): PrisonerProps {
    for (let z = 0; z < prisonerList.length; z++) {
        if (prisonerList[z].name === name) {
            return prisonerList[z];
        }
    }
    throw new Error(`prisoner ${name} not found`);
}

function getRandomInArray(arr: Array<any>) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export { findPrisoner, getRandomInArray };
