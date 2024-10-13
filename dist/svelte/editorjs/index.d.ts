import type EditorJS from '@editorjs/editorjs';
import type { EditorConfig, OutputData } from '@editorjs/editorjs';
import type { Readable, Writable } from 'svelte/store';
export type EditorStore = {
    instance?: EditorJS;
    save?: () => void;
    render?: (data: OutputData) => void;
    clear?: () => void;
};
export type EditorStoreAction = ((node: HTMLElement, parameters?: EditorConfig) => {
    destroy?: () => void;
}) & Readable<EditorStore>;
export type EditorResponse = {
    editor: EditorStoreAction;
    isReady: Readable<boolean>;
    data: Writable<OutputData>;
};
export type SvelteEditorConfig = Omit<EditorConfig, 'holder' | 'holderId'>;
export declare function createEditor(configuration?: SvelteEditorConfig): EditorResponse;
