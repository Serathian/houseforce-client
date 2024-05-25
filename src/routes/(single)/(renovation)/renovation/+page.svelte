<script lang="ts">
	import { theme } from '@/stores';

	const update = () => {
		theme.update((t) => (t = 'Some Hero Text (renovation)'));
	};

	update();
</script>

<h1 class="full">This will be the Renovation home page</h1>
