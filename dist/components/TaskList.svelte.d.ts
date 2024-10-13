import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        data: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TaskListProps = typeof __propDef.props;
export type TaskListEvents = typeof __propDef.events;
export type TaskListSlots = typeof __propDef.slots;
export default class TaskList extends SvelteComponent<TaskListProps, TaskListEvents, TaskListSlots> {
}
export {};
