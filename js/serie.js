


let currentQuest = 0


let quest = [
    {
        src: "../../image/serie/13.mercredi.jpg", 
        ans:  ["La famille Adams", "Mercredi", "Sabrina", "Shadow and Bones"],
        goodAns: "Mercredi"
    },
    {
        src: "../../image/serie/6.friends.png",
        ans:  ["Friends", "How I Met Your Mother", "This is us", "Cougar Town"],
        goodAns: "Friends"
    },
    {
        src: "../../image/serie/20.the walking dead.webp",
        ans:  ["Daybreak", "The Last of Us", "Black Summer", "The Walking Dead"],
        goodAns: "The Walking Dead"
    },
    {
        src: "../../image/serie/5.elite.jpg",
        ans:  ["Après toi le chaos", "Elite", "L'Age de la Colère", "Toy Boy"],
        goodAns: "Elite"
    },
    {
        src: "../../image/serie/19.the originels.jpg",
        ans:  ["Legacies", "The Originels", "Vampires Diarries", "Charmed"],
        goodAns: "The Originels"
    },
    {
        src: "../../image/serie/12.lupin.jpg",
        ans:  ["Kaléidoscope", "Braqueurs", "Furies", "Lupin"],
        goodAns: "Lupin"
    },
    {
        src: "../../image/serie/11.lost.jpg",
        ans:  ["Lost", "Fringe", "Manifest", "La Brea"],
        goodAns: "Lost"
    },
    {
        src: "../../image/serie/18.the 100.png",
        ans:  ["Silo", "The Rain", "The 100", "The Expense"],
        goodAns: "The 100"
    },
    {
        src: "../../image/serie/4.casa de papel.jpg",
        ans:  ["Ozark", "Money Host: Korea", "Berlin", "Casa De Papel"],
        goodAns: "Casa De Papel"
    },
    {
        src: "../../image/serie/10.hazbin hotel.png",
        ans:  ["Désenchantée", "Luz à Osville", "Helluva Boss", "Hazbin Hotel"],
        goodAns: "Hazbin Hotel"
    },
    {
        src: "../../image/serie/17.teen wolf.jpg",
        ans:  ["Wolf Pack", "Teen Wolf", "Legacies", "Shadowhunters"],
        goodAns: "Teen Wolf"
    },
    {
        src: "../../image/serie/3.breaking bad.png",
        ans:  ["Barry", "Les Sopranos", "Breaking Bad", "Narcos"],
        goodAns: "Breaking Bad"
    },
    {
        src: "../../image/serie/9.gossip girl.png",
        ans:  ["Gossip Girl", "Riverdale", "Glimore Girls", "Dynastie"],
        goodAns: "Gossip Girl"
    },
    {
        src: "../../image/serie/16.strangee things.webp",
        ans:  ["The Order", "Lock and Key", "Umbrella Academy", "Stranger Things"],
        goodAns: "Stranger Things"
    },
    {
        src: "../../image/serie/2.american nightmare.jpg",
        ans:  ["American Nightmare", "Scream", "Freakish", "Slasher"],
        goodAns: "American Nightmare"
    },
    {
        src: "../../image/serie/15.prison break.webp",
        ans:  ["Sons of Anarchy", "Breakour Kings", "Prison Break", "24 heures chrono"],
        goodAns: "Prison Break"
    },
    {
        src: "../../image/serie/14.peaky blinders.webp",
        ans:  ["Better Call Saul", "Peaky Blinders", "The Last Kingdom", "Vicking"],
        goodAns: "Peaky Blinders"
    },
    {
        src: "../../image/serie/1.american god.jpeg",
        ans:  ["The Magicians", "Preacher", "Sandman", "American Gods"],
        goodAns: "American Gods"
    },
    {
        src: "../../image/serie/7.game of throne.jpg",
        ans:  ["Game Of Thrones", "The Witchers", "Shadow and Bones", "His dark materials"],
        goodAns: "Game Of Thrones"
    },
    {
        src: "../../image/serie/8.good omens.webp",
        ans:  ["Good Omens", "Umbrella Academy", "Staged", "Supernatural"],
        goodAns: "Good Omens"
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
