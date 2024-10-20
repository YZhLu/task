<script lang="ts">
	import type { Alternative } from '$lib/types/Alternative';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let alternatives: Alternative[];

	import { Avatar, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	export let selectedAlternative: string;
	export let showFeedback: boolean;
	let initials = ['a', 'b', 'c', 'd', 'e'];

	function hdlSelectedAlternative() {
		//console.log("na comp", selectedAlternative, console.log(alternatives))
		dispatch('selectedAlternative', {
			selectedAlternative
		});
	}
</script>

<div class="md:max-w-[800px] w-screen text-surface-800-100-token">
	<ListBox class="py-4" spacing="space-y-0" padding="px-4 py-4" active="variant-filled-tertiary" rounded="rounded-lg">
		{#each alternatives as alternative, i}
			<ListBoxItem
				class=""
				bind:group={selectedAlternative}
				name={initials[i]}
				value={initials[i]}
				on:change={hdlSelectedAlternative}
			>
				<svelte:fragment slot="lead">
					<Avatar
						width="w-10"
						initials={initials[i]}
						background={selectedAlternative === initials[i] ? 'bg-primary-500' : ''}
						border={selectedAlternative !== initials[i]
							? 'border-2 border-surface-800-100-token'
							: ''}
					/>
				</svelte:fragment>
				{@html alternative.statement}
				<svelte:fragment slot="trail">
					<span class:invisible={!showFeedback}>{alternative.score === 0 ? '❌' : '✅'}</span>
				</svelte:fragment>
			</ListBoxItem>
		{/each}
	</ListBox>
</div>
