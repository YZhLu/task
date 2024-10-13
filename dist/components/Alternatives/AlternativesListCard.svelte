<script>import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
export let alternatives;
import { Avatar, ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
export let selectedAlternative = "a";
let initials = ["a", "b", "c", "d", "e"];
function hdlChange() {
  dispatch("alternativesChanges", {
    alternatives
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
			>
				<svelte:fragment slot="lead">
					<Avatar
						initials={initials[i]}
						background={i === 0 ? 'bg-primary-500' : ''}
						border={i === 0 ? '' : 'border-2 border-surface-800-100-token'}
						fill={i === 0 ? 'fill-white' : 'fill-token'}
					/>
				</svelte:fragment>

				<svelte:fragment slot="trail">
					<span>{i !== 0 ? '❌' : '✅'}</span>
				</svelte:fragment>
			</ListBoxItem>
			<div
				class="flex-grow break-words p-4 w-[calc(100%_-_160px)] m-auto relative -top-24 left-2"
				contenteditable="true"
				bind:innerHTML={alternative.statement}
				placeholder="alternativa..."
				on:input={() => hdlChange()}
			/>
		{/each}
	</ListBox>
</div>

<style>
	[contenteditable]:empty:before {
		content: attr(placeholder);
		opacity: 0.4;
	}
</style>
