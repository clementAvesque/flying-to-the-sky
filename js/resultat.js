let result =localStorage.getItem('result');
console.log(result)
let spanElement = document.querySelector('span');
spanElement.innerText = result;

const button_refresh = document.querySelector('#btn')

button_refresh.addEventListener('click', () => {
    let point =0
    localStorage.setItem("result", point)

})