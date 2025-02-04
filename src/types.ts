type CharacterProps = {
    name: string,
    color: string,
    speech: Array<string>
};
type PrisonerProps = CharacterProps & {
    bounty: number,
    efficiency: number,
    levelUpCost: number,
    speech: number,
    level?: number
};
type GuardProps = CharacterProps & {
    salary: number
};
export type { CharacterProps, PrisonerProps, GuardProps };