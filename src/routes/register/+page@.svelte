<script lang="ts">
	import {
		AppBar,
		AppShell,
		LightSwitch,
		getToastStore,
		type ModalSettings,
		type ToastSettings
	} from '@skeletonlabs/skeleton';

	import { getModalStore } from '@skeletonlabs/skeleton';

	
	import type { PageData } from './$types';
	import { saveTask } from './saveTask';
	import { validateTask } from './validateTask';
	
	import TaskRegisterPage from '$lib/Pages/Task/TaskRegisterPage.svelte';
	
	export let data: PageData;
	let skillOptions = data.skills;
	let skilltree = 'test';
	
	const modalStore = getModalStore();
	const toastStore = getToastStore();
	
	export let creator = {
		id: 'data.user.teacherId',
		userId: 'data.user.id'
	};

	let modalData: any;

	function modalComponentFullscreen(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'task',
			title: 'Preview',
			backdropClasses: '!p-0',
			meta: { modalData }
		};
		modalStore.trigger(modal);
	}

	async function hdlSaveTask() {
		const store = await taskComponent.addTask();
		store.alternatives = store.alternatives.map((a) => {
			const { label, ...alternative } = a;
			return alternative;
		});
		console.log('falta salvar', store);

		const validateResult = validateTask(store, creator);

		if (!validateResult.name) {
			toastStore.trigger({
				message: `Titulo faltando. Por favor tente novamente!`,
				background: 'variant-filled-error',
				autohide: false
			});
		}

		if (!validateResult.skills) {
			toastStore.trigger({
				message: `Skills faltando. Por favor tente novamente!`,
				background: 'variant-filled-error',
				autohide: false
			});
		}

		if (!validateResult.body) {
			toastStore.trigger({
				message: `Corpo faltando. Por favor tente novamente!`,
				background: 'variant-filled-error',
				autohide: false
			});
		}

		if (!validateResult.command) {
			toastStore.trigger({
				message: `Comando faltando. Por favor tente novamente!`,
				background: 'variant-filled-error',
				autohide: false
			});
		}

		if (!validateResult.scope) {
			toastStore.trigger({
				message: `Scope faltando. Por favor tente novamente!`,
				background: 'variant-filled-error',
				autohide: false
			});
		}

		if (!validateResult.alternatives) {
			toastStore.trigger({
				message: `Alternativas faltando. Por favor tente novamente!`,
				background: 'variant-filled-error',
				autohide: false
			});
		}

		if (!validateResult.creator) {
			toastStore.trigger({
				message: `Teacher faltando. Por favor entre em contato com o suporte!`,
				background: 'variant-filled-error',
				autohide: false
			});
		}

		if (
			validateResult.name &&
			validateResult.scope &&
			validateResult.command &&
			validateResult.alternatives &&
			validateResult.skills &&
			validateResult.body
		) {
			store.body = JSON.stringify(store.body);
			modalData = JSON.parse(JSON.stringify(store));
			modalComponentFullscreen();
			const t: ToastSettings = {
				message: 'Tem certeza que deseja validar?',
				autohide: false,
				action: {
					label: 'Sim',
					response: () => saveTask(store, creator) //alert('Hello, Falta add post on server')
				}
			};

			toastStore.trigger(t);
		}
	}

	let taskComponent: TaskRegisterPage;
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-1">
			<div class="flex justify-around">
				<a href="../" type="button" class="btn variant-soft-primary hover:scale-105">
					<span
						><img
							src="https://raw.githubusercontent.com/AulaZero/icons/main/icons/return.svg"
							class="m-2 mb-1 h-3 w-3"
							alt="Voltar"
						/></span
					>
					<span>Voltar</span>
				</a>

				<span class="m-auto px-3 absolute right-0 top-[70px] lg:top-[114px] lg:right-[52px]">
					<LightSwitch ring="ring-[1px] ring-primary-500" />
				</span>
				<span>{skilltree}</span>
				<button
					type="button"
					class="btn variant-soft-primary hover:scale-105"
					on:click={hdlSaveTask}
				>
					<span>✔️</span>
					<span>Cadastrar</span>
				</button>
			</div>
		</AppBar>
	</svelte:fragment>

	<TaskRegisterPage {skillOptions} bind:this={taskComponent} />
</AppShell>
