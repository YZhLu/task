<script>import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
export let alternatives;
import { Avatar, ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
export let selectedAlternative;
export let showFeedback;
let initials = ["a", "b", "c", "d", "e"];
function hdlSelectedAlternative() {
  dispatch("selectedAlternative", {
    selectedAlternative
  });
}
</script>

<div class="md:max-w-[1024px] w-screen text-surface-800-100-token">
	<ListBox class="p-4 " active="variant-filled-tertiary" rounded="rounded-lg">
		{#each alternatives as alternative, i}
			<ListBoxItem
				class="py-8"
				bind:group={selectedAlternative}
				name={initials[i]}
				value={initials[i]}
				on:change={hdlSelectedAlternative}
			>
				<svelte:fragment slot="lead">
					<Avatar
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
