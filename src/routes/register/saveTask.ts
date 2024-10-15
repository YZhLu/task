import SERVER from '$lib/Pages/config';
import type { TaskRegisterStoreData } from '$lib/types/TaskRegisterStoreData';

export async function saveTask(
	data: TaskRegisterStoreData,
	creator: { id: string; userId: string }
) {
	// const _data = {
	// 	name: '',
	// 	skills: [],
	// 	body: {
	// 		time: 1712518723675,
	// 		blocks: [],
	// 		version: '2.29.1'
	// 	},
	// 	command: '',
	// 	alternatives: [
	// 		{
	// 			id: '560d3fa3-d5a4-4128-8589-f93530a4a2d4',
	// 			statement: '',
	// 			score: 1,
	// 			explanation: '',
	// 			label: 'a'
	// 		},
	// 		{
	// 			id: '6e6e669a-46c1-482a-9a86-1f784ee78853',
	// 			statement: '',
	// 			score: 0,
	// 			explanation: '',
	// 			label: 'b'
	// 		},
	// 		{
	// 			id: '4ee0154c-4ea2-45ed-b401-042ed8b30f3a',
	// 			statement: '',
	// 			score: 0,
	// 			explanation: '',
	// 			label: 'c'
	// 		},
	// 		{
	// 			id: '7a1232a5-9471-49a1-bf5d-850ef6994e3d',
	// 			statement: '',
	// 			score: 0,
	// 			explanation: '',
	// 			label: 'd'
	// 		},
	// 		{
	// 			id: '0a27639c-b672-40be-b544-9dca033aaf22',
	// 			statement: '',
	// 			score: 0,
	// 			explanation: '',
	// 			label: 'e'
	// 		}
	// 	],
	// 	scope:
	// 		'{\n"a":{"min":1,"max":100,"round":0},\n"b":{"min":1,"max":100,"round":0},\n"r":"",\n"i":"",\n"j":"",\n"k":"",\n"l":""\n}'
	// };

	// console.log(_data);
	// console.log(typeof data);

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

	const res = await fetch(`${SERVER}/tasks/`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: crypto.randomUUID(),
			name: data.name,
			skills: data.skills,
			body: data.body,
			command: data.command,
			isTemplate: true,
			scope: data.scope,
			isValidated: false,
			tags: [],
			alternatives: data.alternatives,

			creator /* : { id: 'c4dde268-a403-494a-904a-701c39164d8b' }, */
		})
	});

	console.log(res);
	alert('Verifique o console para saber se salvou!\n Falta implementar o redirect.');
}
