import { SvelteComponent } from "svelte";
import type { TaskRegisterStoreData } from '../../types/TaskRegisterStoreData';
declare const __propDef: {
    props: {
        store?: import("svelte/store").Writable<TaskRegisterStoreData>;
        skillOptions: any;
        addTask?: () => Promise<TaskRegisterStoreData>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TaskRegisterPageProps = typeof __propDef.props;
export type TaskRegisterPageEvents = typeof __propDef.events;
export type TaskRegisterPageSlots = typeof __propDef.slots;
export default class TaskRegisterPage extends SvelteComponent<TaskRegisterPageProps, TaskRegisterPageEvents, TaskRegisterPageSlots> {
    get store(): import("svelte/store").Writable<TaskRegisterStoreData>;
    get addTask(): () => Promise<TaskRegisterStoreData>;
}
export {};
