<script lang="ts">
	let title = 'task.name';
	let skills = [
		{
			id: '7572a5ec-3422-47b1-93d0-36ea77b51f15',
			label: 'Raz & Prop (a)',
			description:
				'Razão entre segmentos e segmentos proporcionais - Definir a razão entre dois segmentos.',
			createdAt: '2023-05-15T19:53:43.113Z',
			updatedAt: '2023-05-15T19:53:43.113Z'
		}
	];
</script>

<section id="title">
	<h4 class="h4 text-secondary-500 font-bold p-4">{title}</h4>
</section>
<section id="skills">
	<div class="snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto p-4">
		{#each skills as skill, i}
			<div class="snap-start shrink-0 card text-center">
				<span class="badge variant-filled-primary">{skill.label}</span>
			</div>
		{/each}
	</div>
</section>
