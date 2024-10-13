import type { Alternative } from './Alternative';
export interface Block {
    id: string;
    type: string;
    data: {
        text: string;
    };
}
export interface InputObject {
    time: number;
    blocks: Block[];
}
export type RandomParams = {
    min: number;
    max: number;
    round: number;
    type?: string;
};
export type FactoryData = {
    body: string;
    scope: string;
    alternatives: Alternative[];
};
export type Scope = {
    [id: string]: string | RandomParams;
};
