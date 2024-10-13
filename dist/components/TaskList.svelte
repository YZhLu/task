<script>import {
  Autocomplete,
  popup
} from "@skeletonlabs/skeleton";
import TaskCard from "./TaskCard.svelte";
export let data;
let teacherId = data.user.teacherId;
let _tasks = data.tasks;
let skills = data.skills;
function filterTasks(tasks2, skillId) {
  if (skillId === "") return tasks2;
  const filteredTasks = tasks2.filter(
    (t) => t.skills.some((s) => s.label.toLowerCase().trim().startsWith(skillId.toLowerCase().trim()))
  );
  return filteredTasks;
}
let popupSettings = {
  event: "focus-click",
  target: "popupAutocomplete",
  placement: "bottom"
};
let inputPopupSkill = "";
const skillOptions = skills.map((s) => {
  return { ...s, value: s.label };
});
function onPopupDemoSelect(event) {
  inputPopupSkill = event.detail.label;
}
const getTaskSkills = (t) => {
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
