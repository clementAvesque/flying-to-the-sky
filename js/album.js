

let currentQuest = 0


let quest = [
    {   
        src: "../../image/album/1.adele.jpg",
        ans:  ["Adele", "Mylène Farmer", "AURORA", "P!nk"],
        goodAns: "Adele"
    },
    {
        src: "../../image/album/2.amy winehouse.png",
        ans:  ["Rihanna", "Edith Piaf", "Amy Winehouse", "Amy Grant"],
        goodAns: "Amy Winehouse"
    },
    {
        src: "../../image/album/moche.jpg",
        ans:  ["Ariana Grande", "Beyoncé", "Madonna", "Mariah Carey"],
        goodAns: "Beyoncé"
    },
    {
        src: "../../image/album/6.david bowie.png",
        ans:  ["David Bowie", "Neil Young", "John Lenon", "Elvis Presley"],
        goodAns: "David Bowie"
    },
    {
        src: "../../image/album/7.bruno mars.jpg",
        ans:  ["The Weeknd", "Black Atlas", "Kayne West", "Bruno Mars"],
        goodAns: "Bruno Mars"
    },
    {
        src: "../../image/album/8.bigflo et oli.png",
        ans:  ["Roméo Elvis", "Bigflo et Oli", "Stromae", "Orelsan"],
        goodAns: "Bigflo et Oli"
    },
    {
        src: "../../image/album/9.linkin park.png",
        ans:  ["Gorillaz", "The Offspring", "Linkin Park", "Systeme Of A Down"],
        goodAns: "Linkin Park"
    },
    {
        src: "../../image/album/10.maneskin.png",
        ans:  ["The Neighborhoods", "Måneskin", "Artic Monkey", "One Direction"],
        goodAns: "Måneskin"
    },
    {
        src: "../../image/album/11.micheal jackson.png",
        ans:  ["Michael Jackson", "Elton John", "Jackson 5", "Bob Marley"],
        goodAns: "Michael Jackson"
    },
    {
        src: "../../image/album/5.beatles.jpg",
        ans:  ["Beatles", "Guns N'Roses", "Black Sabbath", "Aérosmith"],
        goodAns: "Beatles"
    },

    {
        src: "../../image/album/16.ninho.png",
        ans:  [ "Gazo", "Ninho", "Niska","Karis"],
        goodAns: "Ninho"
    },
    {
        src: "../../image/album/4.aznavour.png",
        ans: ["renaud","claude françois","charles aznavour","george brassens"],
        goodAns: "charles aznavour"
    },
    {
        src: "../../image/album/12.mika.jpg",
        ans:  ["Pan!c at the Disco", "Loïc Nottet", "BB Brunes", "MIKA"],
        goodAns: "MIKA"
    },
    {
        src: "../../image/album/13.plk.jpg",
        ans:  ["PLK", "Tiakola", "Damso", "Zola"], 
        goodAns: "PLK"
    },
    {
        src: "../../image/album/14.pink floyd.jpg",
        ans:  ["Metallica", "Daft Punk", "Pink Floyd", "Oasis"],
        goodAns: "Pink Floyd"
    },
    {
        src: "../../image/album/15.nirvana.png",
        ans:  ["My Chemical Romance", "Rammstein", "Deftones", "Nirvana"],
        goodAns: "Nirvana"
    },
    {
        src: "../../image/album/17.pnl.jpg",
        ans:  ["Ziak", "Nekfeu", "PNL", "Jok'air"],
        goodAns:"PNL"
    },
    {
        src: "../../image/album/18.queen.jpeg",
        ans:  ["Foo Fighters", "Queen", "Radiohead", "Kiss"],
        goodAns: "Queen"
    },
    {
        src: "../../image/album/19.rolling stones.jpeg",
        ans:  ["The Rolling Stones", "The Eagles", "The Whites Stripes", "The Kinks"],
        goodAns: "The Rolling Stones"
    },
    {
        src: "../../image/album/20.yame.jpg",
        ans:  ["Luidji", "Tayc", "Yamê", "Luther"],
        goodAns: "Yamê"
    }
]

let img = document.querySelector('#img_select')




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

