let score1 = 0;
let score2 = 0;
let start_game = false;
let start_button = document.querySelector("start")
let decompt = null;
let touchP1 = null;
let touchP2= null;
function scrollToDiv(cible) {
    document.getElementById(cible).scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function delayp1() {
    touchP1 = setInterval(() => {
        score1--
        let translateX = document.getElementById('player1').offsetTop * (score1 / 100)
        console.log(score1)
        document.getElementById('player1').style.transform = "translateY(-" + translateX + "px)";
        scrollToDiv("player1")
    }, 200)
}

function delayp2() {
    touchP2 = setInterval(() => {
        score2--
        let translateX = document.getElementById('player2').offsetTop * (score2 / 100)

        document.getElementById('player2').style.transform = "translateY(-" + translateX + "px)";
        scrollToDiv("player2")
    }, 200)
}
document.addEventListener('keyup', (event) => {


    if (start_game === true) {

        if (event.key === 'a' || event.key === 'A') {
            clearInterval(touchP1)
            delayp1()
            score1 = score1 + 1
            console.log(score1)
            let translateX = document.getElementById('player1').offsetTop * (score1 / 100)

            document.getElementById('player1').style.transform = "translateY(-" + translateX + "px)";
            scrollToDiv("player1")



        }
        if (event.key === 'p' || event.key === 'P') {
            clearInterval(touchP2)
            delayp2()
            score2 = score2 + 1
            let translateX = document.getElementById('player2').offsetTop * (score2 / 100)
            document.getElementById('player2').style.transform = "translateY(-" + translateX + "px)";
            scrollToDiv("player2")
        }

        if (score2 === 99 || score1 === 99) {
            clearInterval(touchP1)
            clearInterval(touchP2)

            if (score2 === 99) {
                win("player2")
            }
            if (score1 === 99) {
                win("player1")
            }
            score1 = 0
            score2 = 0
            document.getElementById('player2').style.transform = "translateY(-0px)";
            document.getElementById('player1').style.transform = "translateY(-0px)";
            console.log(start_game)
            start_game = false
        }

    }
    if (start_game === false) {

        if (event.key === ' ') {
            document.getElementById('player2').style.transform = "translateY(-0px)";
            document.getElementById('player1').style.transform = "translateY(-0px)";
            scrollToDiv("player2")
            scrollToDiv("player1")
            compte_a_rebour()
        }
    }

})

function compte_a_rebour() {

    let interval = undefined
    let time = 3
    if (!document.getElementById("start")) {
        let restart = document.createElement("div")
        restart.id = "start"
        document.body.appendChild(restart)
    }
    let start_button = document.getElementById("start")

    interval = setInterval(() => {

        time = time - 1
        start_button.textContent = time
        console.log(time)

        if (time === 0) {
            clearInterval(interval)
            start_game = true
            start_button.remove()
            time = 3
        }
    }, 1000);
}

function win(winner) {
    let restart = document.createElement("div")
    restart.id = "start"
    document.body.appendChild(restart)
    restart.textContent = winner + " à gagné!"
    setTimeout(() => {
        restart.textContent = "press " + "'space'" + " for restart"
    }, 2000)

}
