import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ /* fetch, */ params }) => {
  const response = await fetch(
    `https://zaya-api.herokuapp.com/tasks/af286099-894d-499b-902f-0dd24357cc23/`
  );
  const data = await response.json();

  return { question: data, params };
};
