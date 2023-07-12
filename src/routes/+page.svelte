<script>
	import Header from './Header.svelte';
	import Main from './Main.svelte';
	import Footer from './Footer.svelte';
</script>

<section>

	<div class="container">
		<Main />
	</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.container {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		height: 15rem;
		margin-bottom: 10em;
		box-sizing: border-box;
	}

	footer {
		justify-content: center;
		align-items: center;
		padding: 12px;
		position: absolute;
        bottom: 0;
		left: 0;
        width: 100%;
        height: 100px;
        font-family: Copperplate Gothic;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
	
</style>
