<script lang="ts">
	import AlternativesList from '$lib/components/Alternatives/AlternativesList.svelte';
	import TaskBody from '$lib/components/TaskBody.svelte';
	import type { Alternative } from '$lib/types/Alternative.ts';
	import type { Task } from '$lib/types/Task.ts';
	import { questParser } from '@aulazero/mtlang';

	export let task: Task;

	const taskParsed = questParser(task);

	//console.log(taskParsed.alternatives);

	let title = task.name;
	let skills = task.skills;
	let body = taskParsed.body; //task.body;
	let command = task.command;
	let alternatives: Alternative[] = task.alternatives;

	alternatives.forEach((a, i) => {
		a.statement = taskParsed.alternatives[i];
	});

	function shuffleArray<T>(array: T[]): T[] {
		// Use a cópia do array para não modificar o original
		const shuffledArray = [...array];

		// Função de comparação para a função sort
		const compareFunction = () => Math.random() - 0.5;

		// Misture aleatoriamente o array usando a função sort
		return shuffledArray.sort(compareFunction);
	}

	// console.log(alternatives)
	async function updAlternatives() {
		// alternatives = shuffleArray(alternatives);
		return shuffleArray(alternatives);
	}

	// console.log(alternatives)
	let promise = updAlternatives();

	export let selectedAlternative: string = '0';
	export let showFeedback: boolean = true;
</script>

{#await promise then alternatives}
	<fieldset disabled={showFeedback}>
		<section id="Task" class="flex flex-col items-center">
			<section id="question" class=" lg:max-w-[768px] lg:px-0 w-screen px-5 flex flex-col items-start">
				<section id="title">
					<h4 class="h4 text-secondary-500 font-bold py-4">{title}</h4>
				</section>
				<section id="skills">
					<div
						class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto py-4"
					>
						{#each skills as skill, i}
							<div class="snap-start shrink-0 card !bg-transparent text-center">
								<span class="badge variant-filled-primary">{skill.label}</span>
								
							</div>
						{/each}
					</div>
				</section>
				<section id="body" class="py-4">
					{#if typeof body === 'string'}
						<!-- <h4 class="h4 p-4"><TaskBody body={editorBody}></TaskBody></h4> -->
						<h4 class="h4">
							{@html body}
						</h4>
					{:else}
						<TaskBody readOnly={true} {body} />
					{/if}
				</section>
				<hr class="" />
				<section id="command">
					<h3 class="h3 py-4 font-semibold">{@html command}</h3>
				</section>
				<hr class="" />
			</section>
			<section id="alternatives">
				<div class="flex justify-center p-1">
					<AlternativesList
						{alternatives}
						bind:selectedAlternative
						{showFeedback}
						on:selectedAlternative
					/>
				</div>
			</section>
		</section>
	</fieldset>
{/await}
