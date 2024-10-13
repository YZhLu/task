import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TesteProps = typeof __propDef.props;
export type TesteEvents = typeof __propDef.events;
export type TesteSlots = typeof __propDef.slots;
export default class Teste extends SvelteComponent<TesteProps, TesteEvents, TesteSlots> {
}
export {};
