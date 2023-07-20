<script>
  import "./styles.css";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>
<svelte:head>
  <title>Developer Portfolio</title>
  <link rel="icon" href="$public/favicon.png" />
  <meta name="author" content="Nikita Borisov" />
  <meta name="description" content="Here you can see some usefull information about me as a developer." />
</svelte:head>

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
