<script>import { createEventDispatcher } from "svelte";
import { Avatar, ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
const dispatch = createEventDispatcher();
export let alternatives;
export let selectedAlternative;
export let showFeedback;
let initials = ["a", "b", "c", "d", "e"];
let alternative = {
  id: "",
  statement: "",
  score: 0,
  explanation: "",
  label: "",
  checked: false
};
function hdlSelectedAlternative(i) {
  alternative = alternatives[i];
  dispatch("selectedAlternative", {
    selectedAlternative,
    alternative
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
				on:change={()=>hdlSelectedAlternative(i)}
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
