import { SvelteComponent } from "svelte";
import type { TaskRegisterStoreData } from '../../types/TaskRegisterStoreData';
declare const __propDef: {
    props: {
        task?: TaskRegisterStoreData;
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
export type TaskEditPageProps = typeof __propDef.props;
export type TaskEditPageEvents = typeof __propDef.events;
export type TaskEditPageSlots = typeof __propDef.slots;
export default class TaskEditPage extends SvelteComponent<TaskEditPageProps, TaskEditPageEvents, TaskEditPageSlots> {
    get store(): import("svelte/store").Writable<TaskRegisterStoreData>;
    get addTask(): () => Promise<TaskRegisterStoreData>;
}
export {};
