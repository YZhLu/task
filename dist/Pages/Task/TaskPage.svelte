<script>import AlternativesList from "../../components/Alternatives/AlternativesList.svelte";
import TaskBody from "../../components/TaskBody.svelte";
import { questParser } from "@aulazero/mtlang";
export let task;
const taskParsed = questParser(task);
let title = task.name;
let skills = task.skills;
let body = taskParsed.body;
let command = task.command;
let alternatives = task.alternatives;
alternatives.forEach((a, i) => {
  a.statement = taskParsed.alternatives[i];
});
function shuffleArray(array) {
  const shuffledArray = [...array];
  const compareFunction = () => Math.random() - 0.5;
  return shuffledArray.sort(compareFunction);
}
async function updAlternatives() {
  return shuffleArray(alternatives);
}
let promise = updAlternatives();
export let selectedAlternative = "0";
export let showFeedback = true;
</script>

{#await promise then alternatives}
	<fieldset disabled={showFeedback}>
		<section id="Task" class="flex flex-col items-center md:px-8">
			<section id="question" class="md:max-w-[1280px] w-screen px-3 flex flex-col items-start">
				<section id="title">
					<h4 class="h4 text-secondary-500 font-bold p-4">{title}</h4>
				</section>
				<section id="skills">
					<div
						class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto p-4"
					>
						{#each skills as skill, i}
							<div class="snap-start shrink-0 card text-center">
								<span class="badge variant-filled-primary">{skill.label}</span>
							</div>
						{/each}
					</div>
				</section>
				<section id="body" class="m-auto">
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
					<h3 class="h2 p-4">{@html command}</h3>
				</section>
				<hr class="" />
			</section>
			<section id="alternatives">
				<div class="flex justify-center">
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
