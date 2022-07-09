/*
Dato un array di oggetti letterali con:
- url dell’immagine
- titolo
- descrizione
Creare un carosello ispirandosi alla foto allegata. Potete anche usare come base il carosello dell'esercizio precedente

## Milestone 1:
e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
## Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra,
la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.

## BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
## BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
## BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

*/
//array di base
const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
    },
];

//dichiaro variabile globale
const carousel = document.getElementById('carousel-list');
//costante nuova per collegare il thumbnail
const thumbnails = document.querySelector('.thumbnails-list');

//variabile flag per stamparci ora elementi del mio array di oggetti
let carouselElement = '';
//costruisco nuovamente flag per differenziare le due, non riuscendo a gestire __anche__ la lista nella nodelist
let thumbElement = '';

//generazione dinamica immagini nella lista 
for (let i = 0; i < images.length; i++) {
    //inserisco nella variabile flag ad ogni giro del ciclo la stringa di codice che metterò nell' ul
    carouselElement += `<li><img src="${images[i].url}" alt="landscape-${i + 1}"></li>`
    //inserisco nuovamente nella flag ad ogni ciclo le mie immagini ma senza '<li></li>'
    thumbElement += `<img src="${images[i].url}" alt="landscape-${i + 1}">`
}
carousel.innerHTML = carouselElement;
thumbnails.innerHTML = thumbElement;

// recupero li dal DOM
const listItemsImages = document.querySelectorAll('#carousel-list li');
const thumbListImages = document.querySelectorAll('.thumbnails-list img');

// creo variabile per monitorare li a cui darò/leverò classe active
let currentActiveIndex = 0;

//attivo classe active alla prima immagine della galleria
listItemsImages[currentActiveIndex].classList.add('active')
//attivo classe active alla prima immagine del thumbnails
thumbListImages[currentActiveIndex].classList.add('active')


//attivazione next e prev al click, come in script.js
//  connetto variabili al DOM e aggiungo event listener al click delle freccie

const nextPhoto = document.getElementById('next');
const prevPhoto = document.getElementById('prev');

nextPhoto.addEventListener('click', function () {
    //rimuovo la classe
    listItemsImages[currentActiveIndex].classList.remove('active');
    //rimuovo la classe anche dalla thumb
    thumbListImages[currentActiveIndex].classList.remove('active');
    //incremento la variabile della lista per selezionare gli elementi successivi MA
    //deve tornare a 4 quando raggiunge 0
    currentActiveIndex++;
    if (currentActiveIndex >= listItemsImages.length) {
        currentActiveIndex = 0
    }
    //aggiungo la classe active
    listItemsImages[currentActiveIndex].classList.add('active');
    //aggiungo la classe active anche alla thumb
    thumbListImages[currentActiveIndex].classList.add('active');
})

//lavoro sul prev
prevPhoto.addEventListener('click', function () {
    //rimuovo la classe active dal primo elemento del nodo
    listItemsImages[currentActiveIndex].classList.remove('active');
    //rimuovo la classe active dal primo elemento del nodo
    thumbListImages[currentActiveIndex].classList.remove('active');
    //decremento la variabile della lista per selezionare gli elementi successivi MA
    //deve tornare a 0 quando raggiunge 4
    currentActiveIndex--;
    if (currentActiveIndex < 0) {
        currentActiveIndex = listItemsImages.length - 1;
    }
    //aggiungo la classe active
    listItemsImages[currentActiveIndex].classList.add('active');
    //aggiungo la classe active alla thumbnail
    thumbListImages[currentActiveIndex].classList.add('active');
})
