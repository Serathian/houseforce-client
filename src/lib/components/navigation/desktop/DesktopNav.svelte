<script lang="ts">
	// Components
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input';

	// Icons
	import Hammer from 'lucide-svelte/icons/hammer';
	import Rss from 'lucide-svelte/icons/rss';
	import Newspaper from 'lucide-svelte/icons/newspaper';
	import Arrow from 'lucide-svelte/icons/arrow-big-right-dash';
	import Search from 'lucide-svelte/icons/search';
	import Brand from '@/components/blocks/brand.svelte';

	// Other
	import type { DomainConstants } from '@/utils/constants';

	// Props
	export let otherDomain: DomainConstants;

	// Variables
	let y: number;
</script>

<svelte:window bind:scrollY={y} />

<nav class="fixed top-0 hidden w-full bg-muted md:block">
	{#if y < 80}
		<div class="container top-0 flex h-16 w-full items-center justify-between">
			<!-- Brand -->
			<Brand />

			<!-- search -->
			<div class="relative">
				<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input
					type="search"
					placeholder="Search..."
					class="w-full rounded-lg bg-background pl-8 focus-visible:ring-primary md:w-[200px] lg:w-[320px]"
				/>
			</div>
		</div>
	{/if}
	<nav class="container sticky top-0 flex h-16 w-full items-center justify-between">
		<!-- Navigation -->
		<div class="flex gap-3">
			<Button variant="outline" class="gap-3 border-primary text-primary" href="/projects">
				<span class="sr-only">Projects</span>
				<Hammer />
				Projects
			</Button>

			<Button variant="outline" class="gap-3 border-primary text-primary" href="/articles">
				<span class="sr-only">Articles</span>
				<Newspaper />
				Articles
			</Button>

			<Button variant="outline" class="gap-3 border-primary text-primary" href="/blogs">
				<span class="sr-only">Blogs</span>
				<Rss />
				Blogs
			</Button>
		</div>
		<Button
			variant="outline"
			class="gap-3 border-tertiary text-tertiary"
			href={otherDomain.homeUrl}
		>
			<span class="sr-only">Homecare</span>
			To {otherDomain.domainName}
			<Arrow />
		</Button>
	</nav>
</nav>
