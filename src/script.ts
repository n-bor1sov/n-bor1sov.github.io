//import moment from 'moment'

const getIDBtn = document.getElementById('get-id-btn') as HTMLButtonElement;
const idField = document.getElementById('id') as HTMLParagraphElement;
const comicImg = document.getElementById('comic-img') as HTMLImageElement;
const comicTitle = document.getElementById('comic-title') as HTMLParagraphElement;
const date = document.getElementById('pub-date') as HTMLParagraphElement;
const fromNow = document.getElementById('from-now') as HTMLParagraphElement;
const emailForm = document.getElementById('email-form') as HTMLFormElement;
const emailText = document.getElementById('email') as HTMLInputElement;


type Comic = {
    img: string;
    alt: string;
    safe_title: string;
    year: number;
    month: number;
    day: number;
}
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

getIDBtn.addEventListener('click', async function (e) {
    idField.textContent = 'Loading...';
    const email = emailText.value;
    if(!email.endsWith('@innopolis.university')) {
        idField.textContent = 'Email should include "@innopolis.university"';
        comicImg.src = '';
        comicImg.alt = '';
        comicTitle.textContent = '';
        date.textContent = '';
    } else {
        const ID: string = await fetchID(email);
        idField.textContent = 'Unique id of your comic is: ' + ID;
        const comic: Comic = await fetchComic(ID);
        console.log(comic)
        comicImg.src = comic.img;
        comicImg.alt = comic.alt;
        comicTitle.textContent = 'Title: ' + comic.safe_title;
        const published = new Date(Date.UTC(comic.year, comic.month, comic.day));
        date.textContent = 'Was published on: ' + published.toLocaleDateString();
        // const mom: Moment = moment(comic.year + "-" + comic.month + "-" + comic.day);
        // const from_now: Moment = mom.fromNow();
        // fromNow = from_now
        //Realy don`t now how to connect the side library to code. I went through lectures and labs and understanding didn`t come.
        //Dont know how to handle [!] RollupError: "default" is not exported by "node_modules/moment/moment.js", imported by "src/script.ts".
        //It would be briliant if you will write something bout it in feedback
    }
});