import { SvelteComponent } from "svelte";
import type { Task } from '../../types/Task.ts';
declare const __propDef: {
    props: {
        task: Task;
        selectedAlternative?: string;
        showFeedback?: boolean;
    };
    events: {
        selectedAlternative: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TaskPageProps = typeof __propDef.props;
export type TaskPageEvents = typeof __propDef.events;
export type TaskPageSlots = typeof __propDef.slots;
export default class TaskPage extends SvelteComponent<TaskPageProps, TaskPageEvents, TaskPageSlots> {
}
export {};
