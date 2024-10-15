import 'katex/dist/katex.css';
import './style.css';
/**
 * EditorJs Plugin for KateX
 * For block only
 *
 * @typedef {object} KatexData
 * @description Data structure for input and output.
 * @property {string} tex - Formula in KateX / TeX
 *
 * @typedef {object} KatexConfig
 * @description Data structure for config
 * @property {string} delimiter - Delimiter string
 * @property {boolean} readOnly - Is Katex is read-only.
 *
 */
/**
 * Data structure for input and output.
 */
interface KatexData {
    tex: string;
}
/**
 * Data structure for config.
 */
interface KatexConfig {
    delimiter: string;
    placeholder: string;
    throwOnError: boolean;
    displayMode: boolean;
    leqno: boolean;
    fleqn: boolean;
    output: string;
    emptyEditMode: string;
    emptyViewMode: string;
}
declare class KatexEditor {
    private api;
    private data;
    private config?;
    private wrapper;
    private editor;
    private viewer;
    private readOnly;
    constructor({ data, config, api, readOnly }: {
        data: KatexData;
        config?: Partial<KatexConfig>;
        api: any;
        readOnly: boolean;
    });
    render(): HTMLElement;
    private _setup;
    private _createWrapper;
    private _createEditor;
    private _createViewer;
    private _updateViewer;
    validate(data: KatexData): boolean;
    save(): KatexData;
    static get toolbox(): {
        title: string;
        icon: string;
    };
    /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean;
    static get CLASS(): {
        wrapper: string;
        editor: string;
        viewer: string;
        info: string;
    };
}
export default KatexEditor;
