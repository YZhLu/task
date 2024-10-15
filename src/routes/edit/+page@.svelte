<!-- <script lang="ts">
	import TaskPage from '$lib/Pages/Task/TaskPage.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
	export let task = data.question;
	//console.log(task)

	//import {questParser} from "@aulazero/mtlang";

	//const taskParsed = questParser(task);
</script>

<TaskPage {task} />

{JSON.stringify(taskParsed)} -->

<script lang="ts">
	import {
		AppBar,
		AppShell,
		LightSwitch,
		getModalStore,
		getToastStore,
		type ModalSettings,
		type ToastSettings
	} from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();

	// import SERVER from '$lib/Pages/config';
	import TaskEditPage from '$lib/Pages/Task/TaskEditPage.svelte';

	import type { PageData } from './$types';
	import { editTask } from './editTask';
	import { validateTask } from './validateTask';
	import type { TaskRegisterStoreData } from '$lib/types/TaskRegisterStoreData';
	import type { Task } from '$lib/types/Task';

	const modalStore = getModalStore();

	export let data: PageData;
	let skillOptions = data.skills;
	// let skilltree = data.name;
	let _task = data.task;
	let task: Task;

	console.log(/* JSON.parse(_task.body), */ _task.skills);

	try {
		task = { ..._task, body: JSON.parse(/* "ewew, wwr" */ _task.body) };
	} catch (error) {
		console.log(error, 'SHOULD UPDATE TASK FO EDITOR-JS');
		task = _task;
	}

	export let creator = {
		id: data.user.teacherId || '',
		userId: data.user.id
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

	async function hdlEditTask() {
		const store = await taskComponent.addTask();
		store.alternatives = store.alternatives.map((a) => {
			const { label, ...alternative } = a;
			return alternative;
		});
		console.log('falta salvar', store);

		store.creator = creator;

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
			//saveTask(store, creator);
			store.body = JSON.stringify(store.body);
			modalData = JSON.parse(JSON.stringify(store));
			modalComponentFullscreen();
			const t: ToastSettings = {
				message: 'Tem certeza que deseja validar?',
				autohide: false,
				action: {
					label: 'Sim',
					response: () => editTask(store) //alert('Hello, Falta add post on server')
				}
			};

			toastStore.trigger(t);
		}

		//saveTask(store, creator);
		//toastStore.trigger(t);

		// const alternatives = e.detail.alternatives.map((a: Alternative) => {
		// 	{
		// 		const alternative = {
		// 			id: a.id,
		// 			statement: a.statement,
		// 			score: a.score,
		// 			explanation: a.explanation
		// 		};
		// 		return alternative;
		// 	}
		// });

		// const res = await fetch(`${SERVER}/tasks/`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		id: e.detail.id,
		// 		name: e.detail.name,
		// 		skills: e.detail.skills,
		// 		body: e.detail.body,
		// 		command: e.detail.command,
		// 		isTemplate: e.detail.isTemplate,
		// 		scope: e.detail.scope,
		// 		//isSingleAnswer: e.detail.isSingleAnswer,
		// 		//isEssay: e.detail.isEssay,
		// 		//maxScore: e.detail.maxScore,
		// 		//answerKey: e.detail.answerKey,
		// 		alternatives: alternatives,
		// 		/* feedback: e.detail.feedback, */
		// 		creator /* : { id: 'c4dde268-a403-494a-904a-701c39164d8b' }, */
		// 		//essayScore: '0'
		// 	})
		// });

		// console.log(res);
		//alert('salvou!');
	}

	let taskComponent: TaskEditPage;
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-1">
			<div class="flex justify-around">
				<a href="./" type="button" class="btn variant-soft-primary hover:scale-105">
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
				<!-- <span>{skilltree}</span> -->
				<button
					type="button"
					class="btn variant-soft-primary hover:scale-105"
					on:click={hdlEditTask}
				>
					<span>✔️</span>
					<span>Editar</span>
				</button>
			</div>
		</AppBar>
	</svelte:fragment>

	<TaskEditPage {task} {skillOptions} bind:this={taskComponent} />
</AppShell>
