type CharacterProps = {
    name: string,
    color: string,
    speech: Array<string>
};
type PrisonerProps = CharacterProps & {
    bounty: number,
    efficiency: number,
    levelUpCost: number,
    autoClickCost: number,
    level?: number,
    autoClickLevel?: number
};
type GuardProps = CharacterProps & {
    salary: number
};
export type { CharacterProps, PrisonerProps, GuardProps };