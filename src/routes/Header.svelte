<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<h1>
		Nikita Borisov
	</h1>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		
	}
	h1 {
        height: 15%;
        font-family: Copperplate Gothic;
        text-align: center;
        text-shadow:
        -1px -1px #000,
        0 1px 0 #444;
        transition: all 1s;
		width: 100%;
		
    }

	h1:hover {
		text-shadow:
		-1px -1px #000,
		0 1px 0 #444;
	}
</style>
