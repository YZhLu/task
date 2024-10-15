import type { /* Action, Actions, */ PageServerLoad } from './$types';
import SERVER from '$lib/Pages/config';

export const load: PageServerLoad = async ({  fetch }) => {
	

	const fetchSkills = async () => {
		const skillsRes = await fetch(SERVER + `/skills`);
		const skillsData = await skillsRes.json();
		const skills = await skillsData.map((s: { label: string; value?: string }) => {
			const _s = s;
			_s.value = s.label;
			return _s;
		});
		return skills;
	};

	return {
		
		skills: await fetchSkills()
	};
};
