<script lang="ts">
	import RichTextBlock from '@/components/blocks/richTextBlock.svelte';
	import type { BlocksImageBlock, BlocksTextBlock } from '@/types/components';
	import type { APIResponse } from '@/types/strapi';
	import { Domain } from '@/types/types.js';
	import { updateCurrentTheme } from '@/utils/domainHelper';

	// Props
	export let data: APIResponse<'api::homecare.homecare'>;

	// Page Data
	let pageData = data.data;
	let contentArea = pageData.attributes.ContentArea;

	// TODO: Infer the contentarea types, the ones imported from strapi arent comprehensive
	console.log(contentArea);

	updateCurrentTheme(Domain.Homecare, pageData.attributes.Title);
</script>

{#if contentArea?.length}
	<div class="flex flex-col gap-3">
		{#each contentArea as contentAreaItem}
			<RichTextBlock data={contentAreaItem.Text} />
		{/each}
	</div>
{/if}
