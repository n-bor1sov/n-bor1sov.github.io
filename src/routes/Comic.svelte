<script lang="ts">

    import { createEventDispatcher } from 'svelte';

    type Comic = {
        img: string;
        alt: string;
        safe_title: string;
        year: number;
        month: number;
        day: number;
    }
    
    const dispatch = createEventDispatcher();

    let email = '';
    let emailText = '';
    let idField = '';
    let comicImg = '';
    let comicTitle = '';
    let date = '';
    let fromNow = '';

    async function fetchID(email: string) {
        const params = new URLSearchParams();
        if(email) {
            params.append('email', email);
        }
        const r = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
        return await r.json();
    }

    async function fetchComic(id: string) {
        const params = new URLSearchParams();
        if(id) {
            params.append('id', id);
        }
        const r = await fetch('https://fwd.innopolis.university/api/comic?' + params.toString());
        return await r.json();
    }

    async function handleGetID() {
        idField = 'Loading...';
        email = emailText;
        if(!email.endsWith('@innopolis.university')) {
            idField = 'Email should include "@innopolis.university"';
            comicImg = '';
            comicTitle = '';
            date = '';
            fromNow = '';
        } else {
            const ID: string = await fetchID(email);
            idField = 'Unique id of your comic is: ' + ID;
            const comic: Comic = await fetchComic(ID);
            console.log(comic)
            comicImg = comic.img;
            comicTitle = 'Title: ' + comic.safe_title;
            const published = new Date(Date.UTC(comic.year, comic.month, comic.day));
            date = 'Was published on: ' + published.toLocaleDateString();
            fromNow = "Comic was published 15 year ago";
        }
    }

    $: {
        dispatch('update', { idField, comicImg, comicTitle, date, fromNow });
    }
</script>

<div class="container">
    <div class="flexbox-main">
        <div class="item-main">
            <h2>Comics</h2>
            <p>In this section of the site you can escape from boring everyday life and read an individual comic.</p>
            <p>Just enter your Innopolis University email in the field below.</p>
        
            <form id="email-form">
                <label>Enter the email <input class="email" type="text" bind:value={emailText}></label>
            </form>
            <button on:click={handleGetID} id="get-id-btn">Get an Comic</button>
        </div>
        <div class="item-main">
            <p id="id">{idField}</p>
            <img id="comic-img" src={comicImg}>
            <p id="comic-title">{comicTitle}</p>
            <p id="pub-date">{date}</p>
        </div>
    </div>
</div>

<style>
    .flexbox-main{
        /* height:100%; */
        display: flex;
        flex-flow:column;
        align-items: center;
       }
       .item-main {
        box-sizing: border-box;
        padding: 1em;
        text-align: center;
        }
       #get-id-btn {
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
       #get-id-btn:after {
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
       #get-id-btn:hover:after {
        border-color: #f1c40f;
        width: calc(100% - 10px);
        height: calc(100% + 10px);
       }
       .email {
        margin: 10px 10px;
        padding: 10px 20px;
        width: 30%;
        border: 2px solid #f1c40f;
        font-family: Copperplate Gothic;
       }
</style>
