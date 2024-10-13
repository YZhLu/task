import type { Alternative } from "./Alternative";
import type { Skill } from "./Skill";
export type Task = {
    id: string;
    name: string;
    maxScore?: number;
    isTemplate: boolean;
    scope: string;
    body: string;
    command: string;
    alternatives: Alternative[];
    creator: {
        id: string;
        userId: string;
    };
    skills: Skill[];
};
