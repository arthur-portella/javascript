function criarP(texto) {
    const p = document.createElement('p')
    p.textContent = texto
    return p
}

function criarStrong(texto) {
    const strong = document.createElement('strong')
    strong.textContent = texto
    return strong
}

function criarH2(texto) {
    const h2 = document.createElement('h2')
    h2.textContent = texto
    return h2
}

function verificarSituacao() {
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Primeira nota de ${nome}:`))
    let n2 = Number(prompt(`Segunda nota de ${nome}:`))

    let media = (n1 + n2) / 2

    const saida = document.getElementById('saida')
    saida.innerHTML = ''

    saida.appendChild(criarH2(`Analisando a situação de ${nome}`))

    const p = criarP(`Com as notas ${n1.toLocaleString('pt-br')} e ${n2.toLocaleString('pt-br')}, a `)
    p.appendChild(criarStrong(`média é ${media.toLocaleString('pt-br')}`))
    saida.appendChild(p)

    let p1, strong

    if (media < 3){
        p1 = criarP('Com média abaixo de 3,0, o aluno está ')
        strong = criarStrong('REPROVADO')
        strong.classList.add('reprovado')
    } else if (media < 6) {
        p1 = criarP('Com média entre 3,0 e 6,0, o aluno está em ')
        strong = criarStrong('RECUPERAÇÃO')
        strong.classList.add('recuperacao')
    } else {
        p1 = criarP('Com média acima de 6,0, o aluno está ')
        strong = criarStrong('APROVADO')
        strong.classList.add('aprovado')
    }

    p1.appendChild(strong)
    saida.appendChild(p1)
}