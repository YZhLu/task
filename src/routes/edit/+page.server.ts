import type { /* Action, Actions, */ PageServerLoad } from './$types';

import SERVER from '$lib/Pages/config';

export const load: PageServerLoad = async () => {
	const user = {
		id: 'id',
		name: 'user test',
		email: 'user@test.com',
		password: '12345',
		isAdmim: false,
		teacherId: 'teacher_id',
		studentId: 'student_id'
	};
	const fetchTask = async () => {
		const tid = 'c89f81d5-197d-47cd-9033-5336b73a783d'; //af286099-894d-499b-902f-0dd24357cc23/` //e4c20e5b-00bd-4140-82a4-2d7c4af33f5f
		const taskRes = await fetch(SERVER + `/tasks/${tid}/`); //e4c20e5b-00bd-4140-82a4-2d7c4af33f5f`);
		const taskData = await taskRes.json();
		return taskData;
	};

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
		user,
		// name: params.skilltreeId,
		skills: await fetchSkills(),
		task: await fetchTask()
	};
};
