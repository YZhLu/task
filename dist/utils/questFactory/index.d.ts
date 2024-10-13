import type { FactoryData, InputObject } from '../../types/FactoryData';
export declare const questParser: (data: FactoryData) => {
    body: string | InputObject;
    alternatives: string[];
};
