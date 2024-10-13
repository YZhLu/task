<script lang="ts">
	import type { Task } from '$lib/types/Task';
	import {
		Autocomplete,
		popup,
		type AutocompleteOption,
		type PopupSettings
	} from '@skeletonlabs/skeleton';
	import TaskCard from '$lib/components/TaskCard.svelte';
	import type { Skill } from '$lib/types/Skill';
	//import ScrollUp from '$lib/components/ScrollUp.svelte';

	export let data: any;
	// export let tasks: any;
	// export let user: any;

	let teacherId = data.user.teacherId;

	let _tasks = data.tasks;
	let skills = data.skills;
	//const skillNames = skills.map((s) => s.label);

	// console.log("chmaou")
	function filterTasks(tasks: Task[], skillId: string) {
		if (skillId === '') return tasks;
		const filteredTasks = tasks.filter((t) =>
			t.skills.some((s) => s.label.toLowerCase().trim().startsWith(skillId.toLowerCase().trim()))
		);
		return filteredTasks;
	}

	let popupSettings: PopupSettings = {
		event: 'focus-click',
		target: 'popupAutocomplete',
		placement: 'bottom'
	};
	let inputPopupSkill: string = '';

	const skillOptions: AutocompleteOption<string>[] = skills.map((s: Skill) => {
		return { ...s, value: s.label };
	});

	function onPopupDemoSelect(event: CustomEvent<AutocompleteOption<string>>): void {
		inputPopupSkill = event.detail.label;
	}

	const getTaskSkills = (t: Task) => {
		return t.skills.map((s) => s.label);
	};

	$: tasks = filterTasks(_tasks, inputPopupSkill);
</script>

<div class="h-full overflow-hidden flex flex-col gap-2 p-4 lg:px-14">
	<div class="flex justify-end max-h-10">
		<input
			class="input autocomplete w-auto"
			type="search"
			name="autocomplete-search"
			bind:value={inputPopupSkill}
			placeholder="Pesquisar por skill..."
			use:popup={popupSettings}
		/>
		<div data-popup="popupAutocomplete" class="card max-h-44 overflow-auto">
			<Autocomplete
				bind:input={inputPopupSkill}
				options={skillOptions}
				on:selection={onPopupDemoSelect}
			/>
		</div>
	</div>
	{#if tasks.length === 0}
		Nenhuma Questão Cadastrada para o item {inputPopupSkill}
	{:else}
		<div class="card p-4 gap-3 flex flex-col overflow-auto">
			{#each tasks as task}
				<TaskCard name={task.name} skills={getTaskSkills(task)}>
					<a href="./{task.id}">
						<img
							src="https://raw.githubusercontent.com/AulaZero/icons/main/icons/eye.svg"
							alt="Verificar"
							style="margin-bottom: 0.3rem; margin-top: 0.4rem;"
						/>
						Verificar 
					</a>
					<span />

					
				</TaskCard>
			{/each}
		</div>
	{/if}
</div>
