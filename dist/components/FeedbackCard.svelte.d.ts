/** @typedef {typeof __propDef.props}  FeedbackCardProps */
/** @typedef {typeof __propDef.events}  FeedbackCardEvents */
/** @typedef {typeof __propDef.slots}  FeedbackCardSlots */
export default class FeedbackCard extends SvelteComponent<{
    type?: string | undefined;
    value?: string | undefined;
    display?: boolean | undefined;
    answerKey?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type FeedbackCardProps = typeof __propDef.props;
export type FeedbackCardEvents = typeof __propDef.events;
export type FeedbackCardSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        type?: string | undefined;
        value?: string | undefined;
        display?: boolean | undefined;
        answerKey?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};
export {};
