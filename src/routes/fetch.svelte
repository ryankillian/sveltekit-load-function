<script lang="ts">
	import { onMount } from 'svelte';

	let promise;

	onMount(async () => {
		promise = fetchData();
	});

	async function fetchData() {
		console.log('fetchData called');
		const response = await fetch('/api/data');
		return await response.json();
	}
</script>

<a href="/">Home</a>
<a href="/fetch">Frontend fetch</a>
<a href="/load">Load local api (endpoint)</a>
<a href="/loadExternal">Load external api</a>
<h3>Frontend fetch</h3>

{#await promise}
	Loading
{:then result}
	{JSON.stringify(result)}
{/await}
