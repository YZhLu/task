<script lang="ts">
	import '../app.postcss';
	//import Navigation from '$lib/components/Navigation.svelte';
	import { Toast, autoModeWatcher, initializeStores, Drawer, type ModalComponent, Modal } from '@skeletonlabs/skeleton';
	//import ModalTask from '$lib/components/Modals/ModalTask.svelte';

	// const modalComponentRegistry: Record<string, ModalComponent> = {
	// 	task: { ref: ModalTask },
	// };

	initializeStores();
</script>

<svelte:head>{@html '<script>(' + autoModeWatcher.toString() + ')();</script>'}</svelte:head>
<!-- <Drawer><Navigation /></Drawer> -->
<Toast />
<!-- <Modal components={modalComponentRegistry} /> -->
<slot />
