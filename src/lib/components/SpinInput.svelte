<script>
	/* TODO
        
        Change the SPINNER ICON
        FIX the RANGE in type == range
        
    */
	/**
	 * How high should the button be?
	 */
	export let height = 24;

	/**
	 * How wide should the button be?
	 */
	export let width = 44;

	/**
	 * What color to use
	 */
	export let color = 'var(--std-purple)';

	/**
	 * What type to use
	 */
	//export let type;
	
    /**
	 * What step to use
	 */
	export let step = 1;
    /**
	 * What min value to use
	 */
	export let min = 0;
    /**
	 * What max value to use
	 */
	export let max = 1000;

	/**
	 * What type to use
	 * @type {any}
	 */
	 export let value;

	/**
	 * Is readonly?
	 */
	export let readonly = false;
	export let disabled = readonly;

	/**
	 * Don't mess up!
	 */
	/*it's not working!!!*/
	// export let style =
	// 	height || width || color
	// 		? `height: ${height}px; width: ${width}px; --background-color: ${color}; --width: ${width}px; --height: ${height}px; --sizeY: ${
	// 				height - 4
	// 		  }px; --sizeX: ${width - height}px;"`
	// 		: '';
</script>

<div class="input-container">
	<input class="input variant-filled-primary h-11 text-center pl-5" title="Input (number)" type="number" bind:value {readonly} {disabled} on:change {step} {min} {max} />
</div>