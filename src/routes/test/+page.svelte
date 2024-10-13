<script lang="ts">
	import TaskPage from '$lib/Pages/Task/TaskPage.svelte';


	import type { PageData } from './$types';

	export let data: PageData;
	export let task = data.question;
	//console.log(task)

	// import { questParser } from '@aulazero/mtlang';

	// const taskParsed = questParser(task);
</script>

<TaskPage {task} />
<!-- jje -->

<!-- {JSON.stringify(taskParsed)} -->
