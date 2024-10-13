import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        name: string;
        skills: string[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TaskCardProps = typeof __propDef.props;
export type TaskCardEvents = typeof __propDef.events;
export type TaskCardSlots = typeof __propDef.slots;
export default class TaskCard extends SvelteComponent<TaskCardProps, TaskCardEvents, TaskCardSlots> {
}
export {};
