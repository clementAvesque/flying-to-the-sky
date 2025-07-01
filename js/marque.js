
let currentQuest = 0


let quest = [
    {
        src: "../../image/vetement/1.adidas.png", 
        ans:  ["Adidas", "Nike", "Fusalp", "The North Face"],
        goodAns: "Adidas"
    },
    {
        src: "../../image/vetement/2.calvin klein.png",
        ans:  ["Chanel", "Gucci", "Calvin Klein", "Versace"],
        goodAns: "Calvin Klein"
    },
    {
        src: "../../image/vetement/3.carhartt.webp",
        ans:  ["Fendi", "Carhartt", "Converse", "Guess"],
        goodAns: "Carhartt"
    },
    {
        src: "../../image/vetement/4.chanel.png",
        ans:  ["Chanel", "Gucci", "Burton", "Dior"],
        goodAns: "Chanel"
    },
    {
        src: "../../image/vetement/5.coverse.png",
        ans:  ["Burburry", "Giorgio Armani", "Versace", "Converse"],
        goodAns: "Converse"
    },
    {
        src: "../../image/vetement/6.dickies.png",
        ans:  ["Fila", "Dickies", "Superdry", "Catimini"],
        goodAns: "Dickies"
    },
    {
        src: "../../image/vetement/7.dolce gabana.jpg",
        ans:  ["Yves Saint Laurent", "H&M", "Dolce Gabana", "Columbia"],
        goodAns: "Dolce Gabana"
    },
    {
        src: "../../image/vetement/8.hermes.png",
        ans:  ["Moncler", "Boss", "Versace", "Hermes"],
        goodAns: "Hermes"
    },
    {
        src: "../../image/vetement/9.karl lagarfeld.png",
        ans: ["Fendi", "Karl Lagarfeld", "Prada", "Burburry"],
        goodAns: "Karl Lagarfeld"
    },
    {
        src: "../../image/vetement/10.lacoste.png",
        ans:  ["Lacoste", "Crocs", "Tom Ford", "Givenchy"],
        goodAns: "Lacoste"
    },
    {
        src: "../../image/vetement/11.levis.png",
        ans:  ["Guess", "Champion", "Levi's", "Tommy Hilfiger"],
        goodAns: "Levi's"
    },
    {
        src: "../../image/vetement/12.louis vuitton.png",
        ans:  ["Louis Vuitton", "Marc Jacobs", "Balenciaga", "Yves Saint Laurent"],
        goodAns: "Louis Vuitton"
    },
    {
        src: "../../image/vetement/13.moncler.png",
        ans:  ["Mugler", "Lancel", "Longchamp", "Moncler"],
        goodAns: "Moncler"
    },
    {
        src: "../../image/vetement/14.new balance.png",
        ans:  ["Vince", "New Balance", "Chloé", "Giorgio Armani"],
        goodAns: "New Balance"
    },
    {
        src: "../../image/vetement/20.nike.webp",
        ans:  ["Guess", "Prada", "Nike", "Boss"],
        goodAns: "Nike"
    },
    {
        src: "../../image/vetement/15.petit bateau.png",
        ans:  ["Givenchy", "Lanvin", "Petit Bateau", "Tom Ford"],
        goodAns: "Petit Bateau"
    },
    {
        src: "../../image/vetement/16.puma.jpg",
        ans:  ["Puma", "Bally", "Chanel", "Chloé"],
        goodAns: "Puma"
    },
    {
        src: "../../image/vetement/17.ralph lauren.webp",
        ans:  ["Cartier", "Michael Kors", "Ralph Lauren", "Hermes"],
        goodAns: "Ralph Lauren"
    },
    {
        src: "../../image/vetement/18.reebook.png",
        ans:  ["Moschino", "Miu Miu", "Jimmy Choo", "Reebook"],
        goodAns: "Reebook"
    },
    {
        src: "../../image/vetement/19.timberland.png",
        ans:  ["Gucci", "Dior", "Timberland", "Dolce & Gabana"],
        goodAns: "Timberland"
    }
];

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