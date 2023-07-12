<script>
  import "./styles.css";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<div class="main-container">
	<header>
		<Header />
	</header>
	

	<div class="app">
  		<slot />
	</div>

	<footer>
		<Footer />
	</footer>
	
</div>



<style>
  .main-container {
	display: flex;
	flex-direction: column;
  }
  .app {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  footer {
	display: flex;
    bottom: 0;
    width: 100vw;
  }
</style>
