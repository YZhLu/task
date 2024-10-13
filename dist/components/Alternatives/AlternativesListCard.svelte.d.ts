import { SvelteComponent } from "svelte";
import type { Alternative } from '../../types/Alternative';
declare const __propDef: {
    props: {
        alternatives: Alternative[];
        selectedAlternative?: string;
    };
    events: {
        alternativesChanges: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AlternativesListCardProps = typeof __propDef.props;
export type AlternativesListCardEvents = typeof __propDef.events;
export type AlternativesListCardSlots = typeof __propDef.slots;
export default class AlternativesListCard extends SvelteComponent<AlternativesListCardProps, AlternativesListCardEvents, AlternativesListCardSlots> {
}
export {};
