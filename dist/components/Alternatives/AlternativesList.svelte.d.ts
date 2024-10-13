import { SvelteComponent } from "svelte";
import type { Alternative } from '../../types/Alternative';
declare const __propDef: {
    props: {
        alternatives: Alternative[];
        selectedAlternative: string;
        showFeedback: boolean;
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
export type AlternativesListProps = typeof __propDef.props;
export type AlternativesListEvents = typeof __propDef.events;
export type AlternativesListSlots = typeof __propDef.slots;
export default class AlternativesList extends SvelteComponent<AlternativesListProps, AlternativesListEvents, AlternativesListSlots> {
}
export {};
