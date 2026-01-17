const saida = window.document.querySelector('section#saida')

function clicar() {
    let num = Math.floor(Math.random() * 100) + 1

    saida.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar() {
    saida.innerHTML = ''
}