function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



let currentQuest = 0


let quest = [
    {
        src: "../../image/drapeaux/1.afrique du sud.png", 
        ans:  ["Arménie", "Bolivie", "Afrique du Sud", "Bostwana"],
        goodAns: "Afrique du Sud"
    }, 
    {
        src: "../../image/drapeaux/2.angleterre.png",
        ans:  ["Royaume-Unis", "Angleterre", "Cuba", "Croatie"],
        goodAns: "Royaume-Unis"
    },
    {
        src: "../../image/drapeaux/3.argentine.png",
        ans:  ["Guatemala", "Fidji", "Costa Rica", "Argentine"],
        goodAns: "Argentine"
    },
    {
        src: "../../image/drapeaux/4.bangladesh.png",
        ans:  ["Burkina Faso", "Bangladesh", "Cote d'Ivoire", "Haïti"],
        goodAns: "Bangladesh"
    },
    {
        src: "../../image/drapeaux/5.bulgarie.png",
        ans:  ["Bulgarie", "Mali", "Burundie", "Namibie"],
        goodAns: "Bulgarie"
    },
    {
        src: "../../image/drapeaux/7.france.png",
        ans:  ["Moldavie", "Pays-Bas", "Roumanie", "France"],
        goodAns: "France"
    },
    {
        src: "../../image/drapeaux/6.canada.png",
        ans:  ["Singapour", "Pérou", "Norvège", "Canada"],
        goodAns: "Canada"
    },
    {
        src: "../../image/drapeaux/8.grece.png",
        ans:  ["Guatemala", "Islande", "Grèce", "Honduras"],
        goodAns: "Grèce"
    },
    {
        src: "../../image/drapeaux/9.inde.png",
        ans:  ["Inde", "Lituanie", "Mongolie", "Ouganda"],
        goodAns: "Inde"
    },
    {
        src: "../../image/drapeaux/10.irlande.png",
        ans:  ["Panama", "Mauritanie", "Irlande", "Mexique"],
        goodAns: "Irlande"
    },
    {
        src: "../../image/drapeaux/11.jamaique.png",
        ans:  ["Seychelles", "Indonésie", "Jordanie", "Jamaïque"],
        goodAns: "Jamaïque"
    },
    {
        src: "../../image/drapeaux/12.kenya.png",
        ans:  ["Kirghizistan", "Kenya", "Kowet", "Kiribati"],
        goodAns: "Kenya"
    },
    {
        src: "../../image/drapeaux/13.liban.png",
        ans:  ["Liban", "Malawi", "Nigeria", "Ouganda"],
        goodAns: "Liban"
    },
    {
        src: "../../image/drapeaux/14.madagascar.png",
        ans:  ["Indonésie", "Guinée", "Equateur", "Madagascar"],
        goodAns: "Madagascar"
    },
    {
        src: "../../image/drapeaux/15.nepal.png",
        ans:  ["Pakistan", "Quatar", "Népal", "Salvador"],
        goodAns: "Népal"
    },
    {
        src: "../../image/drapeaux/16.philipines.png",
        ans:  ["Philipines", "Nicaragua", "Maroc", "Lettonie"],
        goodAns: "Philipines"
    },
    {
        src: "../../image/drapeaux/17.russie.png",
        ans:  ["Russie", "Gabon", "Croatie", "Tchéquie"],
        goodAns: "Russie"
    },
    {
        src: "../../image/drapeaux/18.sri lanka.png",
        ans:  ["Monténégro", "Serbie", "Tanzanie", "Sri Lanka"],
        goodAns: "Sri Lanka"
    },
    {
        src: "../../image/drapeaux/19.us.png",
        ans:  ["Nouvelle-Zélande", "Etats-Unis", "Australie", "Îles Cook"],
        goodAns: "Etats-Unis"
    },
    {
        src: "../../image/drapeaux/20.zimbabwe.png",
        ans:  ["Brunei", "Zimbabawe", "Comores", "Biélorussie"],
        goodAns: "Zimbabwe"
    },
    {
        src: "../../image/drapeaux/mongolie.jpg",
        ans:  ["Mongolie", "Zimbabawe", "Comores", "Biélorussie"],
        goodAns: "Mongolie"
    }
];


let img = document.querySelector('#img_select')




let reponses = document.querySelector('#reponses')

// const button = document.createElement("button");
// button.id = "rep1"
// button.innerText = "ergeh";
// reponses.appendChild(button);


// const button_next = document.querySelector('#passe')
// cd../ permet de revenir sur un fichier precedent
// ls permet de lister les element dedans 

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
