<script>export let name;
export let skills;
</script>

<div class="card variant-filled-primary rounded-xl p-2 w-full md:grid md:grid-cols-[1fr_3fr_128px] md:px-4 font-Nunito">
	
		<div class="text-xl p-4 font-semibold">{name}</div>
		<div class="p-4">
			<span> Items: </span>
			<div class="overflow-auto  gap-2">
				{#each skills as skill}
					
						<span class="badge variant-ringed-tertiary mr-1 mt-1">{skill}</span>
					
				{/each}
			</div>
		</div>

		<div class="p-4  flex justify-around items-center md:justify-between ">
			<slot />
		</div>
	
</div>
