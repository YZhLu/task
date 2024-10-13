/** @typedef {typeof __propDef.props}  SpinInputProps */
/** @typedef {typeof __propDef.events}  SpinInputEvents */
/** @typedef {typeof __propDef.slots}  SpinInputSlots */
export default class SpinInput extends SvelteComponent<{
    value: any;
    height?: number | undefined;
    width?: number | undefined;
    color?: string | undefined;
    step?: number | undefined;
    min?: number | undefined;
    max?: number | undefined;
    readonly?: boolean | undefined;
    disabled?: boolean | undefined;
}, {
    change: Event;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SpinInputProps = typeof __propDef.props;
export type SpinInputEvents = typeof __propDef.events;
export type SpinInputSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        height?: number | undefined;
        width?: number | undefined;
        color?: string | undefined;
        step?: number | undefined;
        min?: number | undefined;
        max?: number | undefined;
        readonly?: boolean | undefined;
        disabled?: boolean | undefined;
    };
    events: {
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
