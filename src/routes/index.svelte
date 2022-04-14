<script>
	import { goto } from '$app/navigation';

	function go() {
		goto('/load');
	}
	function goExternal() {
		goto('/loadExternal');
	}
</script>

<a href="/">Home</a>
<a href="/fetch">Frontend fetch</a>
<a href="/load">Load local api (endpoint)</a>
<a href="/loadExternal">Load external api</a>
<button on:click={go}>Load local api via goto()</button>
<button on:click={goExternal}>Load external api via goto()</button>
<h3>Home</h3>
