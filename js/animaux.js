

let currentQuest = 0


let animaux = [
    {
        src: "../../image/animaux/1.aigle.jpeg",
        ans:  ["Faucon", "Vautour", "Milan royal", "Aigle"],
        goodAns: "Aigle"
    },
    {
        src: "../../image/animaux/2.beluga.jpg",
        ans:  ["Dauphin", "Requin","Beluga", "Baleine",],
        goodAns: "Beluga"
    },
    {
        src: "../../image/animaux/3.capybara.jpeg",
        ans:  [ "Mara", "Cochon dinde", "Hamster","Capybara"],
        goodAns: "Capybara"
    },
    {
        src: "../../image/animaux/4.chamoix.jpg",
        ans:  ["Chamoix", "Chèvre", "Bouc", "Isard"],
        goodAns: "Chamoix"
    },
    {
        src: "../../image/animaux/5.chat.jpeg",
        ans:  [ "Serval","Chat", "Rat", "Lynx"],
        goodAns: "Chat"
    },
    {
        src: "../../image/animaux/6.chien.jpg",
        ans:  [ "loup", "Chacal", "Coyotte","Chien"],
        goodAns: "Chien"
    },
    {
        src: "../../image/animaux/7.elan.jpeg",
        ans: [ "Cerf", "Caribou","Elan", "Rennes"],
        goodAns: "Elan",
    },
    {
        src: "../../image/animaux/8.grenouille.jpg",
        ans: ["Grenouille", "Crapeau", "Axolotl", "Salamandre"],
        goodAns: "Grenouille"
    },
    {
        src: "../../image/animaux/9.lapin.jpg",
        ans: [ "Lièvres", "Ecureuils","Lapin", "Marmottes"],
        goodAns: "Lapin"
    },
    {
        src: "../../image/animaux/10.lion.jpg",
        ans: [ "Yenne", "Lion","Tigre", "Panthère"],
        goodAns: "Lion"
    },
    {
        src: "../../image/animaux/11.loup.jpg",
        ans: ["Loup", "Loutre", "Renard", "Chien-loup","Loup" ],
        goodAns:"Loup"
    },
    {
        src: "../../image/animaux/12.lynx.jpeg",
        ans: [ "Caracal", "Linx", "Lynx","Renard"],
        goodAns: "Lynx"
    },
    {
        src: "../../image/animaux/13.meduse.jpeg",
        ans: [ "Anemone de mer","Méduse", "Corail", "Hydroïde"],
        goodAns: "Méduse"
    },
    {
        src: "../../image/animaux/14.paresseux.jpg",
        ans: ["Paresseux", "Fourmilier", "Koala", "Echidné"],
        goodAns: "Paresseux"
    },
    {
        src: "../../image/animaux/15.poisson lion.jpeg",
        ans: [ "Blobfish", "Poisson-lune", "Poisson rouge", "Poisson-lion"],
        goodAns:"Poisson-lion"
    },
    {
        src: "../../image/animaux/16.poulpe.jpeg",
        ans: [ "Calmar", "Pieuvre","Poulpe", "Seiche"], 
        goodAns: "Poulpe"
    },
    {
        src: "../../image/animaux/17.raie menta.jpeg",
        ans: [ "Requin", "Chimère","Raie menta", "Pastenague"],
        goodAns: "Raie menta"
    },
    {
        src: "../../image/animaux/18.renard.jpeg",
        ans: ["Renard", "Chacal", "Chien", "Dhole"],
        goodAns: "Renard"
    },
    {
        src: "../../image/animaux/19.requin.jpg",
        ans: [ "Poisson-scie", "Requin", "Raie", "Chimère"],
        goodAns: "Requin"
    },
    {
        src: "../../image/animaux/20.serpent.jpeg",
        ans: [ "Serpen", "Orvet", "Lezard","Serpent"],
        goodAns: "Serpent"
    }
]
let quest=[]

let img = document.querySelector('#img_select')

quest= animaux


let reponses = document.querySelector('#reponses')

// const button = document.createElement("button");
// button.id = "rep1"
// button.innerText = "ergeh";
// reponses.appendChild(button);


// const button_next = document.querySelector('#passe')
// button_next.addEventListener('click', () => {

// })

// for(let run=0;run<quest.length;run++){
//     let current_item= quest[run]
//     console.log(current_item.src)
//     img.src = quest[run].src

// }

// console.log(quest[0].src)
// console.log(quest[0].ans)

let ans = quest[currentQuest].ans
let point = 0
img.src = quest[currentQuest].src
const button_next = document.querySelector('#btn')

const audio_false = new Audio('../../sound_effect/false.mp3');
const audio_true = new Audio('../../sound_effect/true.mp3');

for (let i = 0; i < ans.length; i++) {
    const button = document.createElement("button");
    button.addEventListener('click', () => {
    let goodans = quest[currentQuest].goodAns
        if (button.innerText == goodans) {
            audio_true.play()

            point=point+1
            
            localStorage.setItem("result", point)
        }else{audio_false.play();}
console.log(point)
console.log(currentQuest)
        nextquestion()
    })

    button.id = "rep" + i
    button.innerText = ans[i];
    reponses.appendChild(button);

}


button_next.addEventListener('click', () => {
    nextquestion()
})




function nextquestion() {
        if (1+currentQuest >=quest.length){
            

        window.location.href = "../../page_de_base/resultat.html";
     }
     currentQuest = currentQuest + 1
    img.src = quest[currentQuest].src

    // console.log(currentQuest)
    // console.log(quest.length)



        for (let check = 0; check < ans.length; check++) {
            let ans = quest[currentQuest].ans

            let CheckAns = document.querySelector('#rep' + check)
            CheckAns.innerText = ans[check];
        }
}


let timer = 60;

function Timer() {
}

 Timer();

 let down = setInterval(() => {
     if (timer > 0) {
         timer--;
         Timer();  
     } else {
         clearInterval(window.location.href="../../page_de_base/resultat.html");
       
     }
    let up = document.querySelector('#titleChrono')
    up.innerText = timer;
     console.log(timer)
 }, 1000);  

