import type { Alternative } from '$lib/types/Alternative';
import type { TaskRegisterStoreData } from '$lib/types/TaskRegisterStoreData';

function validateAlternative(alternatives: Alternative[]) {
	const result = alternatives.filter((alt) => alt.statement);
	return result.length === alternatives.length;
}
export function validateTask(
	store: TaskRegisterStoreData,
	creator: { id: string; userId: string }
) {
	const validateResult = {
		name: false,
		command: false,
		scope: false,
		alternatives: false,
		skills: false,
		body: false,
		creator: false
	};

	if (store.name) {
		validateResult.name = true;
	}
	if (store.command) {
		validateResult.command = true;
	}

	try {
		JSON.parse(store.scope);
		validateResult.scope = true;
	} catch (error) {
		console.log(error);
	}

	if (validateAlternative(store.alternatives)) {
		validateResult.alternatives = true;
	}

	if (store.skills.length) {
		validateResult.skills = true;
	}

	if (typeof store.body !== 'string' && store.body.blocks.length) {
		validateResult.body = true;
	} else {
		console.log('Verifique o Body, deve estar na versão antiga!');
	}

	if (creator.id && creator.userId) {
		validateResult.creator = true;
	}

	return validateResult;
}
