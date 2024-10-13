<script lang="ts">
	// @ ts-nocheck
	//import Table from 'editorjs-table';
	//import { createEditor } from '$lib/svelte/editorjs';

	// @ts-ignore
	import { createEditor } from '$lib/svelte/editorjs';
	// @ts-ignore
	import Header from '@editorjs/header';
	// @ts-ignore
	import List from '@editorjs/list';
	// @ts-ignore
	import RawTool from '@editorjs/raw';
	// @ts-ignore
	import Quote from '@editorjs/quote';
	// @ts-ignore
	//import Embed from '@editorjs/embed';

	import { onMount } from 'svelte';
	import type { InputObject } from '$lib/types/FactoryData';

	let _editor: any;
	let _data: any;
	let _isReady: boolean;

	export let readOnly = false;
	export let body: InputObject | string;

	onMount(async () => {
		//const Table = (await import('editorjs-table')).default;
		// @ts-ignore
		// @ts-ignore
		const Embed = (await import('@editorjs/embed')).default;
		// @ts-ignore
		const ImageTool = (await import('@editorjs/image')).default;
		// @ts-ignore
		const Checklist = (await import('@editorjs/checklist')).default;
		// @ts-ignore
		const LinkTool = (await import('@editorjs/link')).default;

		//const Superscript = require('editorjs-superscript');
		// @ts-ignore
		const Superscript = (await import('editorjs2-superscript')).default;

		// @ts-ignore
		const SuperSuperscript = (await import('editorjs-superscript')).default;

		// @ts-ignore
		const Subscript = (await import('editorjs-subscript')).default;

		// @ts-ignore
		const FontSize = (await import('editorjs-inline-font-size-tool')).default;

		// @ts-ignore
		// const MathTex = (await import('editorjs-math')).default;
		// or import MathTex from 'editorjs-math';

		//const MathEditor = (await import('editorjs-mathlive')).default;
		//const EJLaTeX = (await import('editorjs-latex')).default;
		//const KatexEditor = (await import('katex-editorjs')).default; //from './katex-editor';

		const { editor, data, isReady } = createEditor({
			readOnly,
			onReady() {
				console.log('data-> ', data);
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
						placeholder: 'Corpo...'
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
					inlineToolbar: ['link', 'bold', 'italic'],
					shortcut: 'CMD+SHIFT+H'
				},
				quote: {
					class: Quote,
					inlineToolbar: true,
					shortcut: 'CMD+SHIFT+O',
					config: {
						quotePlaceholder: 'Insira a citação',
						captionPlaceholder: 'Autor da citação'
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
						defaultStyle: 'unordered'
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
							byFile: '/uploadFile' // Your backend file uploader endpoint
							//byUrl: '/uploadFile' // Your endpoint that provides uploading by Url
						}
					}
				}
			}
		});
		_editor = editor;
		_data = data;
		// @ts-ignore
		_isReady = isReady;
		//console.log(init);
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
