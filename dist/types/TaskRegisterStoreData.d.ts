import type { Alternative } from './Alternative';
import type { InputObject } from './FactoryData';
import type { Skill } from './Skill';
export interface TaskRegisterStoreData {
    id?: string;
    tags?: string[];
    name: string;
    skills: Skill[];
    body: InputObject | string;
    command: string;
    alternatives: Alternative[];
    scope: string;
    creator?: {
        id: string;
        userId: string;
    };
}
