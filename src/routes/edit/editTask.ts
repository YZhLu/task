import SERVER from '$lib/Pages/config';
import type { TaskRegisterStoreData } from '$lib/types/TaskRegisterStoreData';

export async function editTask(
	data: TaskRegisterStoreData,
	//creator: { id: string; userId: string }
) {

    console.log("dsfdg ",data)
	const res = await fetch(`${SERVER}/tasks/${data.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: data.id,
			name: data.name,
			skills: data.skills,
			body: data.body,
			command: data.command,
			isTemplate: true,
			scope: data.scope,
			isValidated: false,
			tags: data.tags,
			alternatives: data.alternatives,

			creator : data.creator/* : { id: 'c4dde268-a403-494a-904a-701c39164d8b' }, */
		})
	});

	console.log(res);
	alert('Verifique o console para saber se salvou!\n Falta implementar o redirect.');
}
