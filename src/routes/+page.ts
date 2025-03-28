import type { PageLoad } from "./$types";

const tid = 'c89f81d5-197d-47cd-9033-5336b73a783d' //af286099-894d-499b-902f-0dd24357cc23/` //e4c20e5b-00bd-4140-82a4-2d7c4af33f5f
export const load: PageLoad = async ({ /* fetch, */ params }) => {
  const response = await fetch(
    `https://zaya-api.herokuapp.com/tasks/${tid}/` //e4c20e5b-00bd-4140-82a4-2d7c4af33f5f
  );
  const data = await response.json();

  return { question: data, params };
};
