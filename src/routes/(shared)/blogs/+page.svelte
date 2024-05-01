<script lang="ts">
	export let data;
</script>

<h1>Blogs Listing Page</h1>
<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/blogs/{slug}">{title}</a></li>
	{/each}
</ul>
