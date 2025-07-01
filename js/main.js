let choose = 0;
const button_serie = document.querySelector('#serie')
button_serie.addEventListener('click', () => {

    console.log('click')
    choose = 1;
    localStorage.setItem("choix", choose)
    window.location.href = "theme/serie/quiz_serie.html";
})

const button_album = document.querySelector('#album')
button_album.addEventListener('click', () => {
    choose = 2;
    localStorage.setItem("choix", choose)
    console.log('click')

    window.location.href = "theme/album/quiz_album.html";})

const button_pet = document.querySelector('#pet')
button_pet.addEventListener('click', () => {
    choose = 3;
    localStorage.setItem("choix", choose)
    console.log('click')

    window.location.href = "theme/pet/quiz_pet.html";})

const button_vetement = document.querySelector('#vetement')
button_vetement.addEventListener('click', () => {
    choose = 4;
    localStorage.setItem("choix", choose)
    console.log('click')

    window.location.href = "theme/marque/quiz_marque.html";})

const button_monument = document.querySelector('#monument')
button_monument.addEventListener('click', () => {
    choose = 5;
    localStorage.setItem("choix", choose)
    console.log('click')

    window.location.href = "theme/monument/quiz_monument.html";
})

const button_flag = document.querySelector('#flag')
button_flag.addEventListener('click', () => {
    choose = 6;
    localStorage.setItem("choix", choose)
    console.log('click')

    window.location.href = "theme/flag/quiz_flag.html";

})



