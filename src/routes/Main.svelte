<script>
    import { base } from '$app/paths';
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<main>
	<div class="flexbox-main">
		<div class="item-main">
			<h2>About me<br></h2>
			<p>My name is Nikita Borisov. I`m first year bachlore student of Innopolis University.<br> My speciality is Informatics and Computer Engineering. Web development and Neural Networks now is the fields of my investigation.</p>
		</div>
		<div class="item-main">
			<h2>My projects<br></h2>
			<ul>
				<li>Street Atr Spot Bot - conducts tours of street art objects in my hometown. Already 3000 users.</li>
				<li>Sport Achivement system for Innopolis University - now in progress</li>
			</ul>
		</div>
        <div class="item-main">
            <a href="{base}/comics">
                <button>Comics</button>
            </a>
        </div>
	</div>
</main>

<style>
	p {
		text-align: center;
        font-family: Copperplate Gothic;
	}
	h2 {
		text-align: center;
        font-family: Copperplate Gothic;
	}

	.flexbox-main{
        font-family: Copperplate Gothic;
        
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
       }
    .item-main {
        font-family: Copperplate Gothic;
        box-sizing: border-box;
        }
        button {
        text-decoration: none;
        display: inline-block;
        margin: 10px 20px;
        padding: 10px 30px;
        position: relative;
        border: 2px solid #f1c40f;
        color: #f1c40f;
        font-family: Copperplate Gothic;
        transition: .4s;
       }
       button:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin: auto;
        border: 2px solid rgba(0, 0, 0, 0);
        transition: .4s;
       }
       button:hover:after {
        border-color: #f1c40f;
        width: calc(100% - 10px);
        height: calc(100% + 10px);
       }
</style>
