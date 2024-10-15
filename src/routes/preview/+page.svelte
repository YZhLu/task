<script lang="ts">
	import type { PageData } from './$types';

	import type { Task } from '$lib/types/Task';
	import TaskPage from '$lib/Pages/Task/TaskPage.svelte';
	
	export let data: PageData;
	export let task: Task = data.task;
	

	
</script>

<TaskPage showFeedback={true} {task} />
