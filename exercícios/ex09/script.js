const res = window.document.querySelector('#res')
const mark = res.querySelector('mark')
let contador = 0

function clicar() {
    contador++
    mark.innerText = contador
}

function zerar() {
    contador = 0
    mark.innerText = contador
}