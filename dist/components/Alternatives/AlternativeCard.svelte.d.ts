import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        label: string;
        statement: string;
        explanation: string;
        onExam?: boolean;
        readonly?: boolean;
        checked?: boolean;
        feedback?: boolean;
        score?: number;
    };
    events: {
        removeAlternative: CustomEvent<any>;
        selectedAlternative: CustomEvent<any>;
        setScore: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AlternativeCardProps = typeof __propDef.props;
export type AlternativeCardEvents = typeof __propDef.events;
export type AlternativeCardSlots = typeof __propDef.slots;
export default class AlternativeCard extends SvelteComponent<AlternativeCardProps, AlternativeCardEvents, AlternativeCardSlots> {
}
export {};
