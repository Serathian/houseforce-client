<script lang="ts">
	import Navigation from '$lib/components/navigation/Navigation.svelte';
	import Hero from '$lib/components/hero/Hero.svelte';
	import { theme } from '@/stores';

	let theme_value: string;
	theme.subscribe((value) => {
		theme_value = value;
	});
</script>

<Navigation />
<Hero heroText={theme_value} />

<div class="container">
	<slot />
</div>
