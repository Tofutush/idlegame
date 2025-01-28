type CharacterProps = {
    name: string,
    color: string
};
type PrisonerProps = CharacterProps & {
    bounty: number
};
type GuardProps = CharacterProps & {
    salary: number
};
export type { CharacterProps, PrisonerProps, GuardProps };