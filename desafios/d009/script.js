function criarP(texto){
    const p = document.createElement('p')
    p.innerText = texto
    return p
}

function reajustar() {
    let nome = window.prompt('Qual é o nome do funcionário?')
    let salario_atual = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let reajuste = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

    const res = window.document.querySelector('section#res')

    res.innerHTML = ''

    const h2 = document.createElement('h2')
    h2.innerText = `${nome} recebeu um aumento salarial!`
    res.appendChild(h2)

    res.appendChild(criarP(`O salário atual era R$ ${salario_atual.toFixed(2).replace('.', ',')}.`))

    res.appendChild(criarP(`Com um aumento de ${reajuste}%, o salário vai aumentar R$ ${(salario_atual * (reajuste / 100)).toFixed(2).replace('.', ',')} no próximo mês.`))

    res.appendChild(criarP(`E a partir daí, ${nome} vai passar a ganhar R$ ${(salario_atual * (1 + (reajuste / 100))).toFixed(2).replace('.', '.')}.`))

}