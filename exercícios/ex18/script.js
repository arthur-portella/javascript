let numSorteado = Math.floor(Math.random() * 100) + 1

function adivinhar() {

    const saida = window.document.querySelector('section#saida')

    let palpite, condicao

    palpite = Number(window.prompt('Qual é o seu palpite?'))

    if (palpite < numSorteado)
        condicao = 'MAIOR'
    else if (palpite > numSorteado)
        condicao = 'MENOR'

    if (palpite != numSorteado)
        saida.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>${condicao}!</strong></p>`
    else if (palpite == numSorteado) {
        saida.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${numSorteado}!</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }


}