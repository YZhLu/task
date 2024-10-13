<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import FeedbackCard from '$lib/components/FeedbackCard.svelte';
	/*  import Tag from "./Tag.svelte"; */

	import AlternativeItem from '$lib/components/Alternatives/AlternativeItem.svelte';
	import SpinInput from '$lib/components/SpinInput.svelte';

	export let label: string;
	export let statement: string;
	export let explanation: string;
	export let onExam = false;
	export let readonly = false;
	export let checked = false;
	export let feedback = true;
	export let score = 0;

	const dispatch = createEventDispatcher();

	const removeAlternative = (_e: any) => {
		dispatch('removeAlternative', {
			label: label
		});
	};

	const hdlSelectedAlternative = (e: { detail: { checked: any } }) => {
		dispatch('selectedAlternative', {
			checked: e.detail.checked,
			label: label
		});
	};

	const hdlSetScore = () => {
		dispatch('setScore', {
			score: score,
			label: label
		});
	};
</script>

<div class="alternative">
	<button class="remove" on:click|preventDefault={removeAlternative} class:visible={onExam} />
	<div class="alternative-container" class:checked>
		<div class="letra">
			<!--  <Tag bind:label /> -->
			<AlternativeItem
				backgroundColor="var(--washed-purple)"
				borderColor="var(--std-purple)"
				size="2rem"
				borderWidth="2px"
				{checked}
				{label}
				on:selectedAlternative={hdlSelectedAlternative}
			/>
		</div>
		{#if readonly}
			<div class="alternative-statement">{@html statement}</div>
		{:else}
			<div
				class="alternative-statement"
				contenteditable="true"
				bind:innerHTML={statement}
				placeholder="alternativa..."
			/>
		{/if}

		<div class="spin" class:feedback class:visible={onExam}>
			<SpinInput bind:value={score} height={24} {readonly} on:change={hdlSetScore} />
		</div>
	</div>

	<div class="alternative-feedback" class:feedback class:visible={onExam}>
		<FeedbackCard bind:value={explanation} display={true} />
	</div>

	{#if !readonly}
		<hr />
	{/if}
</div>

<style>
	hr {
		opacity: 0.075;
		width: 100%;
		margin-bottom: 0;
	}

	[contenteditable]:empty:before {
		content: attr(placeholder);
		opacity: 0.4;
	}

	.letra {
		margin-right: 1.25rem;
		/* border: 1px solid green; */
	}

	.alternative {
		margin-top: 0rem;
		max-width: inherit;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 0 0 1rem;
		max-width: 100%;
		/* border: 1px solid red; */
	}

	.alternative-feedback {
		padding: auto;
		width: 100%;
		display: flex;
		max-width: inherit;
		flex-grow: 1;
		size: 0.5rem;
		display: none;
	}

	.alternative-container {
		max-width: inherit;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 1.125rem 0;
		/* border: 1px solid lime; */
	}
	.alternative-statement {
		flex-grow: 1;
		word-wrap: break-word;
		font-size: 1.025rem;
		margin-right: 1rem;
		padding: 1rem;
		justify-self: start;
	}

	.alternative-statement :global(*) {
		color: inherit !important;
		font-size: inherit !important;
		font-family: inherit !important;
		font-weight: inherit !important;
	}

	.spin {
		display: flex;
		justify-content: space-around;
		align-items: center;
		display: none;
	}

	.remove {
		margin-top: 0.125rem;
		width: 2rem;
		margin-left: auto;
		margin-right: 1.5rem;
		margin-bottom: -1.75rem;
		height: 2em;
		background: no-repeat 50% 50%
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
		background-size: 2em 2em;
		border: none;
		opacity: 0;
		transition: opacity 0.2s;
		text-indent: -9999px;
		cursor: pointer;
	}

	/* div {border:solid;} */
	.alternative:hover > .remove {
		opacity: 1;
	}

	.alternative:hover {
		border-radius: 1rem;
		background-color: var(--yogurt);
	}
	.feedback {
		display: flex;
	}

	.checked {
		background-color: var(--yogurt);
		/* border: solid; */
		border-radius: 0.75rem;
		padding: 0 0.25rem;
	}

	@media (min-width: 320px) and (max-width: 768px) {
		.alternative {
			width: 90%;
			margin: 0;
		}
		.alternative-statement {
			margin-right: 0;
			padding: 1rem 0.5rem 1rem 1rem;
		}
	}

	.visible {
		display: none;
	}
</style>
