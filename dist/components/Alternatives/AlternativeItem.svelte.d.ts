/** @typedef {typeof __propDef.props}  AlternativeItemProps */
/** @typedef {typeof __propDef.events}  AlternativeItemEvents */
/** @typedef {typeof __propDef.slots}  AlternativeItemSlots */
export default class AlternativeItem extends SvelteComponent<{
    style?: string | undefined;
    label?: string | undefined;
    checked?: boolean | undefined;
    size?: string | undefined;
    borderWidth?: string | undefined;
    backgroundColor?: string | undefined;
    borderColor?: string | undefined;
}, {
    selectedAlternative: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AlternativeItemProps = typeof __propDef.props;
export type AlternativeItemEvents = typeof __propDef.events;
export type AlternativeItemSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        style?: string | undefined;
        label?: string | undefined;
        checked?: boolean | undefined;
        size?: string | undefined;
        borderWidth?: string | undefined;
        backgroundColor?: string | undefined;
        borderColor?: string | undefined;
    };
    events: {
        selectedAlternative: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
