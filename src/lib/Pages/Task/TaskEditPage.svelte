<script lang="ts">
	import { writable } from 'svelte/store';
	import type { Skill } from '$lib/types/Skill';
	import AlternativesListCard from '$lib/components/Alternatives/AlternativesListCard.svelte';
	import TaskBody from '$lib/components/TaskBody.svelte';
	import {
		Autocomplete,
		InputChip,
		type AutocompleteOption,
		getToastStore
	} from '@skeletonlabs/skeleton';
	import type { TaskRegisterStoreData } from '$lib/types/TaskRegisterStoreData';

	const toastStore = getToastStore();
	const alternatives = [
		{
			id: crypto.randomUUID(),
			statement: '',
			score: 1,
			explanation: '',
			label: 'a'
		},
		{
			id: crypto.randomUUID(),
			statement: '',
			score: 0,
			explanation: '',
			label: 'b'
		},
		{
			id: crypto.randomUUID(),
			statement: '',
			score: 0,
			explanation: '',
			label: 'c'
		},
		{
			id: crypto.randomUUID(),
			statement: '',
			score: 0,
			explanation: '',
			label: 'd'
		},
		{
			id: crypto.randomUUID(),
			statement: '',
			score: 0,
			explanation: '',
			label: 'e'
		}
	];

	const scope = `{
"a":{"min":1,"max":100,"round":0},
"b":{"min":1,"max":100,"round":0},
"r":"",
"i":"",
"j":"",
"k":"",
"l":""
}`;

	export let task: TaskRegisterStoreData = {
		name: '',
		skills: [],
		body: { time: Date.now(), blocks: [] },
		command: '',
		alternatives: alternatives,
		scope: scope
	};

	//console.log(task)

	export const store = writable<TaskRegisterStoreData>(
		task /* {
		name: task.name || '',
		skills: task.skills || [],
		body: task.body || { time: Date.now(), blocks: [] },
		command: task.command || '',
		alternatives: task.alternatives || alternatives,
		scope: task.scope || scope
	} */
	);

	let inputSkill = '';
	let inputSkillList: string[] = task.skills.map((s) => s.label) || [];
	let inputComponent: InputChip;

	export let skillOptions: any; //AutocompleteOption<string>[];
	// console.log(skillOptions[0]);

	function onInputChipSelect(event: CustomEvent<AutocompleteOption<string>>): void {
		inputSkill = event.detail.label;
		inputComponent.addChip(inputSkill);

		$store.skills = skillOptions.filter((s: Skill) => inputSkillList.includes(s.label));

		inputSkill = '';
	}

	function onInvalidHandler(event: any): void {
		toastStore.trigger({
			message: `"${event.detail.input}" é um valor inválido. Por favor tente novamente!`,
			background: 'variant-filled-error'
		});
	}

	function onRemoveHandler(event: any): void {
		$store.skills = skillOptions.filter((s: Skill) => inputSkillList.includes(s.label));
	}

	function isValidSkill(value: string): boolean {
		return skillOptions.some((option: Skill) => option.label === value);
	}

	function hdlAlternativesChange(e: any) {
		$store.alternatives = e.detail.alternatives;
	}
	/* 
	const addAlternative = () => {
		const label = String.fromCharCode(97 + alternatives.length);
		alternatives = [
			...alternatives,
			{
				label: label,
				statement: '',
				explanation: '',
				checked: false,
				score: 0,
				id: crypto.randomUUID()
			}
		];
	}; 
	*/

	let taskbody: TaskBody;

	export async function addTask() {
		$store.body = await taskbody.updBody();
		return $store;
	}
</script>

<fieldset>
	<section id="Task" class="flex flex-col items-center md:px-8">
		<section id="question" class="md:max-w-[1280px] w-screen px-3 flex flex-col">
			<section id="title" class="max-w-sm p-4 pb-0">
				<input
					class="input h4 text-secondary-500 font-bold"
					type="text"
					placeholder="Título..."
					bind:value={$store.name}
				/>

				<!-- <h4 class="h4 text-secondary-500 font-bold p-4">{title}</h4> -->
			</section>
			<section id="skills" class="p-4 flex flex-col gap-2">
				<InputChip
					bind:this={inputComponent}
					bind:input={inputSkill}
					bind:value={inputSkillList}
					on:invalid={onInvalidHandler}
					on:remove={onRemoveHandler}
					allowUpperCase={true}
					validation={isValidSkill}
					placeholder="Adicionar habilidade..."
					name="chips"
					class="card w-full max-w-[90vw] max-h-48 p-4 overflow-y-auto"
				/>
				<div class="card w-full max-w-[90vw] max-h-40 p-4 overflow-y-auto" tabindex="-1">
					<Autocomplete
						bind:input={inputSkill}
						options={skillOptions}
						denylist={inputSkillList}
						on:selection={onInputChipSelect}
						emptyState="Habilidade não encontrada."
						regionEmpty="Não sei o que faz!!!!"
					/>
				</div>
			</section>
			<section id="body" class=" p-4">
				<TaskBody bind:this={taskbody} body={$store.body}></TaskBody>
			</section>
			<hr class="" />
			<section id="command" class="self-center">
				<!-- <input class="bg-surface-200 rounded-lg h2 p-4 my-4" type="text" placeholder="Comando..." /> -->
				<div
					contenteditable="true"
					bind:innerHTML={$store.command}
					class=" h2 min-h-12 p-4 rounded-lg overflow-wrap-break-words min-w-[60vw]"
					placeholder="Comando..."
				/>
				<!-- <h3 class="h2 p-4">{@html command}</h3> -->
			</section>
			<hr class="" />
		</section>
		<section id="scope" class="md:max-w-[1280px] w-screen">
			<div class="grid md:grid-cols-2 p-4 gap-4">
				<span class="grid gap-4">
					<h3 class="h3 mx-auto">Scope</h3>
					<textarea
						id="w3review"
						name="w3review"
						rows="9"
						cols="50"
						bind:value={$store.scope}
						class="bg-surface-50-900-token"
					/>
				</span>
				<span class="grid gap-4">
					<h3 class="h3 mx-auto">Scope-preview</h3>
					{@html scope}
				</span>
			</div>
		</section>
		<section id="alternatives">
			<div class="flex justify-center">
				<AlternativesListCard
					alternatives={$store.alternatives}
					on:alternativesChanges={hdlAlternativesChange}
				/>
			</div>
		</section>
	</section>
	<div class="content p-4 flex justify-center">
		<!-- <button type="button" class="btn variant-filled-primary md:w-96" on:click={addAlternative}
			>Adicionar Alternativa</button
		> -->
	</div>
</fieldset>

<style>
	[contenteditable]:empty:before {
		content: attr(placeholder);
		opacity: 0.4;
	}
</style>
