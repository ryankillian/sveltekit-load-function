<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ fetch }) {
		console.log('load external called');
		const resourceUrl = `https://jsonplaceholder.typicode.com/todos/1`;
		const res = await fetch(resourceUrl);

		if (res.ok) {
			return {
				props: {
					propName: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load url`)
		};
	}
</script>

<script>
	export let propName;
</script>

<a href="/">Home</a>
<a href="/fetch">Frontend fetch</a>
<a href="/load">Load local api (endpoint)</a>
<a href="/loadExternal">Load external api</a>
<h3>Load external api</h3>
{JSON.stringify(propName)}
