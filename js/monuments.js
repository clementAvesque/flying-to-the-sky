function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



let currentQuest = 0


let quest = [
    {
        src: "../../image/monument/1.alhambra.jpg", 
        ans:  ["Alcaza d'Almeria", "Alhambra", "Alcazar Royal", "Mosquée Cathédrale"],
        goodAns: "Alhambra"
    },
    {
        src: "../../image/monument/2.christ redempteur.jpg",
        ans:  [ "Christ Roi", "Venus de Milo", "Statue de la Liberté","Christ Redempteur"],
        goodAns: "Christ Redempteur"
    },
    {
        src: "../../image/monument/3.golden gate bridge.jpeg",
        ans:  ["Golden  Gate Bridge", "Viaduc de Millau", "Pont de Brooklyn", "Pont du Gard"],
        goodAns: "Golden Gate Bridge"
    },
    {
        src: "../../image/monument/4.grande muraille.jpeg",
        ans:  [ "Muraille de Constantinople", "Mur de Berlin", "Grande Muraille de Chine","Muraille de Séoule"],
        goodAns: "Grande Muraille de Chine"
    },
    {
        src: "../../image/monument/5.mach picchu.jpg",
        ans:  [ "Kuelac", "Pisac, Vallée Sacrée", "Plateforme Agricole d'Ollantaytambo","Machu Picchu"],
        goodAns: "Machu Picchu"
    },
    {
        src: "../../image/monument/6.memorial 11 sept.jpg",
        ans:  [ "Mémorial du Martyr","Mémorial du 11 Septembre", "Parc du Mémorial de la Paix", "Musée National D'auschwitz"],
        goodAns: "Mémorial du 11 Septembre"
    },
    {
        src: "../../image/monument/7.mosquée sheikh.jpg",
        ans:  [ "Mosquée Hassan-2", "Mosquée Al-Asqua", "Mosquée Skeikh","Mosquée Bleue"],
        goodAns: "Mosquée Skeikh"
    },
    {
        src: "../../image/monument/8.mosquée ste sophie.jpg",
        ans:  ["Mosquée Sainte Sophie", "Mosqué Nasir-ol-Malk", "Mosquée Istiqlal", "Mosquée Faisal"],
        goodAns: "Mosquée Sainte Sophie"
    },
    {
        src: "../../image/monument/9.mt st michel.jpg",
        ans:  [ "Mortain-Bocage", "Notre-Dame de Paris", "Sanctuaire de Notre-Dame de Lourdes","Mont Saint Michel"],
        goodAns: "Mont Saint Michel"
    }, 
    {
        src: "../../image/monument/10.notrev dame de paris.jpg",
        ans:  [ "Notre-Dame de Reims", "Abbaye de Fontfroide","Notre-Dame de Paris", "Eglise Sainte Catherine"],
        goodAns: "Notre-Dame de Paris"
    },
    {
        src: "../../image/monument/11.opera sydney.jpg",
        ans:  [ "Opéra Garnier","Opéra de Sydney", "Opéra Semperoper", "Opéra d'Etat de Viennes"],
        goodAns: "Opéra de Sydney"
    },
    {
        src: "../../image/monument/12.sagrada familia.avif",
        ans:  ["Sagrada Familia", "Alhambra", "Cathédrale de Burges", "Cathédrale de Palme"],
        goodAns: "Sagrada Familia"
    },
    {
        src: "../../image/monument/14.taj mahal.jpg",
        ans:  [ "Bibi Ka Maqbara","Taj Mahal", "Qutub Minar", "Temple d'or"],
        goodAns: "Taj Mahal"
    },
    {
        src: "../../image/monument/13.statue de la liberte.webp",
        ans:  [ "Christ Redempteur", "Venus de Milo", "Statue de la Mère-Patrie","Statue de la Libertée"],
        goodAns: "Statue de la Libertée"
    },
    {
        src: "../../image/monument/15.temple abou simbel.jpg",
        ans:  [ "Temple Louxor", "Temple Kom Ombo","Temple d'Abou Simbel", "Temple d'Hatchepsout"],
        goodAns: "Temple d'Abou Simbel"
    },
    {
        src: "../../image/monument/16.temple d'angkor.jpg",
        ans:  [ "Temple Beng Mealea","Temple d'Angkar Wat", "Temple Preach Vihear", "Le fort de Derawat"],
        goodAns: "Temple d'Angkar Wat"
    },
    {
        src: "../../image/monument/17temple wat pho.jpg",
        ans:  [ "Grand Palais", "Temple Wat Arun", "Bangla Road", "Temple Wat Pho"],
        goodAns: "Temple Wat Pho"
    },
    {
        src: "../../image/monument/18.tour de pise.jpeg",
        ans:  ["Tour de Pise", "BigBen", "Tour Petronas", "Batiment Lloyd"],
        goodAns: "Tour de Pise"
    },
    {
        src: "../../image/monument/19.tour eiffel.jpg",
        ans:  [ "Batiment Flaitron", "Tour de Canton", "Burj Khalifa","Tour Eiffel"],
        goodAns: "Tour Eiffel"
    },
    {
        src: "../../image/monument/20.ville maya.jpg",
        ans:  [ "Tulum", "Cobà","Ancienne Ville Maya","Calakmul"],
        goodAns: "Ancienne Ville Maya"
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
