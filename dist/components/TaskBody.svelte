<script>import { createEditor } from "../svelte/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import RawTool from "@editorjs/raw";
import Quote from "@editorjs/quote";
import { onMount } from "svelte";
let _editor;
let _data;
let _isReady;
export let readOnly = false;
export let body;
onMount(async () => {
  const Embed = (await import("@editorjs/embed")).default;
  const ImageTool = (await import("@editorjs/image")).default;
  const Checklist = (await import("@editorjs/checklist")).default;
  const LinkTool = (await import("@editorjs/link")).default;
  const Superscript = (await import("editorjs2-superscript")).default;
  const SuperSuperscript = (await import("editorjs-superscript")).default;
  const Subscript = (await import("editorjs-subscript")).default;
  const FontSize = (await import("editorjs-inline-font-size-tool")).default;
  const { editor, data, isReady } = createEditor({
    readOnly,
    onReady() {
      console.log("data-> ", data);
    },
    // @ts-ignore
    data: body,
    //inlineToolbar: ['link', 'marker', 'bold', 'italic'],
    tools: {
      /* table: {
      	class: Table
      }, */
      paragraph: {
        config: {
          placeholder: "Corpo..."
        }
      },
      fontSize: FontSize,
      superscript: {
        class: Superscript
      },
      subscript: {
        class: Subscript
      },
      superSuperscript: {
        class: SuperSuperscript
      },
      // katexBlock: {
      // 	class: KatexEditor
      // },
      // Math: {
      // 	class: EJLaTeX,
      // 	shortcut: 'CMD+SHIFT+M',
      // },
      header: {
        // @ts-ignore
        class: Header,
        inlineToolbar: ["link", "bold", "italic"],
        shortcut: "CMD+SHIFT+H"
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+O",
        config: {
          quotePlaceholder: "Insira a cita\xE7\xE3o",
          captionPlaceholder: "Autor da cita\xE7\xE3o"
        }
      },
      raw: RawTool,
      checklist: Checklist,
      embed: {
        class: Embed,
        inlineToolbar: true,
        config: {
          services: {
            youtube: true,
            coub: true
          }
        }
      },
      list: {
        class: List,
        inlineToolbar: true,
        config: {
          defaultStyle: "unordered"
        }
      },
      linkTool: {
        class: LinkTool
        // config: {
        // 	endpoint: 'http://localhost:8008/fetchUrl' // Your backend endpoint for url data fetching,
        // }
      },
      image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: "/uploadFile"
            // Your backend file uploader endpoint
            //byUrl: '/uploadFile' // Your endpoint that provides uploading by Url
          }
        }
      }
    }
  });
  _editor = editor;
  _data = data;
  _isReady = isReady;
});
export const updBody = async () => {
  await $_editor.save();
  return await $_data;
};
</script>

<br />
<!-- <button class="btn variant-filled-secondary" on:click={updBody}>Save</button> -->
<main class="editorjs">
	<!-- isready=={$_isReady} -->
	{#if _isReady}
		<div use:_editor />
	{/if}
</main>
