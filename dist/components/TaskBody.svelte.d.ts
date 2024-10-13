import { SvelteComponent } from "svelte";
import type { InputObject } from '../types/FactoryData';
declare const __propDef: {
    props: {
        readOnly?: boolean;
        body: InputObject | string;
        updBody?: () => Promise<any>;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TaskBodyProps = typeof __propDef.props;
export type TaskBodyEvents = typeof __propDef.events;
export type TaskBodySlots = typeof __propDef.slots;
export default class TaskBody extends SvelteComponent<TaskBodyProps, TaskBodyEvents, TaskBodySlots> {
    get updBody(): () => Promise<any>;
}
export {};
