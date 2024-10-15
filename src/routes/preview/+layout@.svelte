<script lang="ts">
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	$page.url.pathname;

</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-1">
			<div class="flex justify-around">
				<a href="./" type="button" class="btn variant-soft-primary hover:scale-105">
					<span
						><img
							src="https://raw.githubusercontent.com/AulaZero/icons/main/icons/return.svg"
							class="m-2 mb-1 h-3 w-3"
							alt="Voltar"
						/></span
					>
					<span>Voltar</span>
				</a>
				<span class="flex items-center gap-4">
					<span class="flex items-center"><LightSwitch ring="ring-[1px] ring-primary-500" /></span>
					
					<a href="{$page.url.pathname}/edit" type="button" class="btn variant-soft-primary hover:scale-105">
						<span>Edit</span>
						<span
							><img
								src="https://raw.githubusercontent.com/AulaZero/icons/main/icons/edit.svg"
								class="m-2 mb-1 h-3 w-3"
								alt="Voltar"
							/></span
						>
					</a>
				</span>
			</div>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
