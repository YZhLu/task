<!--this is acctualy an modfied subjectButton-->
<script>
	import { createEventDispatcher } from 'svelte';

	let src, alt, height;

	/**
	 * Is the button checked?
	 */
	export let checked = false;

	/**
	 * How large should the button be?
	 */
	export let size = '21px';

	/**
	 * How thick should the border be?
	 */
	export let borderWidth = '1px';

	/**
	 * What background color to use
	 */
	export let backgroundColor = 'var(--washed-purple)';

	/**
	 * What border color to use
	 */
	export let borderColor = 'var(--std-purple)';

	/**
	 * What is the icon?
	 */
	//export let img;

	/**
	 * Don't mess up!--background-color: ${bgColor};
	 */
	export let style = '';

	export let label = 'a';

	$: if (checked) {
		style = `--background-color: ${borderColor}; --color: ${backgroundColor};`;
	} else {
		style = `--background-color: ${backgroundColor}; --color: ${borderColor};`;
	}

	function toggle() {
		//user.loggedIn = !user.loggedIn;
	}

	const dispatch = createEventDispatcher();
	const hdlClick = () => {
		checked = !checked;
		console.log(checked);
		dispatch('selectedAlternative', {
			checked: checked
		});
	};
</script>

<div class="toggle__container" {style}>
	
	<span
		on:click={hdlClick}
		class="btn toggleBtn"
		style="--border-color: {borderColor}; --size: {size}; --border-width: {borderWidth};"
	>
		<!-- <img {src} {alt} {height} /> -->
		<!-- {checked} -->
		{label}
		<!-- {checked} -->
	</span>
	<!--  </label> -->
</div>

<style>
	.btn {
		cursor: pointer;
		background-color: var(--background-color);
		color: var(--color);
		height: var(--size);
		width: var(--size);
		border: solid var(--border-width) var(--border-color);
		border-radius: var(--size);
		font-size: calc(var(--size) * 0.75);
		padding: 0 0.125rem 0.25rem 0.125rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 360) {
	}
</style>
