import katex from 'katex';
import 'katex/dist/katex.css';
import './style.css';
class KatexEditor {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    api;
    data;
    config;
    wrapper;
    editor;
    viewer;
    readOnly;
    constructor({ data, config = {}, api, readOnly }) {
        this.api = api;
        this.readOnly = readOnly;
        this.data = {
            tex: ''
        };
        this.config = {
            delimiter: '$$',
            placeholder: 'Type here...',
            throwOnError: false,
            displayMode: true,
            leqno: false,
            fleqn: true,
            output: 'html',
            emptyEditMode: 'Try x+y',
            emptyViewMode: 'Click here to type your equation...',
            ...config
        };
        this.wrapper = null;
        this.editor = null;
        this.viewer = null;
        Object.assign(this.data, data);
        Object.assign(this.config, config);
    }
    render() {
        this._setup();
        return this.wrapper || document.createElement('div');
        ;
    }
    _setup() {
        this._createWrapper();
        this._createEditor();
        this._createViewer();
        if (this.wrapper && this.editor && this.viewer) {
            this.wrapper.appendChild(this.editor);
            this.wrapper.appendChild(this.viewer);
        }
    }
    _createWrapper() {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add(KatexEditor.CLASS.wrapper);
    }
    _createEditor() {
        this.editor = document.createElement('div');
        this.editor.contentEditable = 'false';
        if (!this.readOnly) {
            this.editor.contentEditable = 'true';
        }
        // this.editor.contentEditable = 'true';
        this.editor.setAttribute('placeholder', this.config.placeholder);
        this.editor.innerHTML = this.data.tex;
        this.editor.classList.add(KatexEditor.CLASS.editor);
        if (this.data.tex) {
            this.editor.hidden = true;
        }
        this.api.listeners.on(this.editor, 'input', () => this._updateViewer(), false);
        this.api.listeners.on(this.editor, 'blur', () => {
            this.editor.hidden = true;
            this._updateViewer();
        }, false);
    }
    _createViewer() {
        this.viewer = document.createElement('div');
        this.viewer.classList.add(KatexEditor.CLASS.viewer);
        this._updateViewer();
        this.api.listeners.on(this.viewer, 'click', () => {
            if (!this.readOnly)
                this.editor.hidden = false;
            this.editor.focus();
            this._updateViewer();
        }, false);
    }
    _updateViewer() {
        //@ts-expect-error EDITOR NULL
        if (this.editor?.textContent?.length > 0) {
            //@ts-expect-error EDITOR NULL
            katex.render(this.editor.textContent, this.viewer, this.config);
        }
        else {
            this.viewer.innerHTML = '';
            const info = document.createElement('span');
            info.classList.add(KatexEditor.CLASS.info);
            info.innerText = this.editor.hidden
                ? this.config.emptyViewMode
                : this.config.emptyEditMode;
            this.viewer.appendChild(info);
        }
    }
    validate(data) {
        return !!data.tex.trim();
    }
    save() {
        return {
            tex: this.editor.textContent.trim()
        };
    }
    static get toolbox() {
        return {
            title: 'Math',
            icon: '<svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M29.425 22.96l1.387-2.96h1.188l-2 12h-30v-2.32l10.361-12.225-10.361-10.361v-7.094h30.625l1.375 8h-1.074l-0.585-1.215c-1.104-2.293-1.934-2.785-4.341-2.785h-20.688l11.033 11.033-9.294 10.967h16.949c3.625 0 4.583-1.299 5.425-3.040z"/></svg>'
        };
    }
    /**
     * Returns true to notify the core that read-only mode is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported() {
        return true;
    }
    static get CLASS() {
        return {
            wrapper: 'aff-katex-wrapper',
            editor: 'aff-katex-editor',
            viewer: 'aff-katex-viewer',
            info: 'aff-katex-viewer-info'
        };
    }
}
export default KatexEditor;
