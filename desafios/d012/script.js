function criarP(texto) {
    const p = document.createElement('p')
    p.textContent = texto
    return p
}

function verificar() {
    let precoAntigo = Number(prompt('Qual era o preço anterior do produto?'))
    let precoAtual = Number(prompt('Qual é o preço atual do produto?'))

    const saida = document.getElementById('saida')
    saida.innerHTML = ''

    const h2 = document.createElement('h2')
    h2.textContent = 'Analisando os valores informados'
    saida.appendChild(h2)

    saida.appendChild(criarP(`O produto custava ${precoAntigo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${precoAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.`))

    if(precoAntigo < precoAtual) {
        saida.appendChild(criarP('Hoje o produto está mais caro.'))
        saida.appendChild(criarP(`O preço subiu ${(precoAtual - precoAntigo).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.`))
        saida.appendChild(criarP(`Uma variação de ${((precoAtual - precoAntigo) * 100) / precoAntigo}% pra cima.`))
    } else {
        saida.appendChild(criarP('Hoje o produto está mais barato.'))
        saida.appendChild(criarP(`O preço caiu ${(precoAntigo - precoAtual).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.`))
        saida.appendChild(criarP(`Uma variação de ${((precoAntigo - precoAtual) * 100) / precoAntigo}% pra baixo.`))
    }
}