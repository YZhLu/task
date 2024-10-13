import { writable } from 'svelte/store';
export function createEditor(configuration = {}) {
    const initialData = configuration.data ?? {
        time: new Date().getTime(),
        blocks: [],
    };
    let editorInstance;
    const { subscribe: subscribeEditor, set: setEditor } = writable({});
    const { subscribe: subscribeIsReady, set: setIsReady } = writable(false);
    const { subscribe: subscribeData, set: setData, update: updateData, } = writable(initialData);
    const newSetData = (data) => {
        updateData((oldData) => ({ ...oldData, ...data }));
        editorInstance?.render(data);
    };
    function editor(node, parameters = {}) {
        async function setup() {
            if (typeof window === 'undefined')
                return;
            const Editor = await import('@editorjs/editorjs');
            const instance = new Editor.default({
                ...configuration,
                ...parameters,
                holder: node,
            });
            instance.isReady
                .then(() => {
                editorInstance = instance;
                if (parameters.data)
                    setData(parameters.data);
                const save = async () => {
                    const data = await instance.save();
                    setData(data);
                };
                const clear = async () => {
                    instance.clear();
                    updateData((data) => ({
                        ...data,
                        time: new Date().getTime(),
                        blocks: [],
                    }));
                };
                const render = async (data) => {
                    instance.render(data);
                };
                setEditor({
                    instance,
                    save,
                    render,
                    clear,
                });
                setIsReady(true);
            })
                .catch(console.error);
        }
        setup();
        return {
            destroy() {
                editorInstance?.destroy();
            },
        };
    }
    editor.subscribe = subscribeEditor;
    return {
        editor,
        isReady: { subscribe: subscribeIsReady },
        data: { subscribe: subscribeData, set: newSetData, update: updateData },
    };
}
