function criarP(texto) {
    const p = document.createElement('p')
    p.innerText = texto
    return p
}

function desconto() {
    const res = window.document.querySelector('section#res')
    let produto = window.prompt('Qual é o produto que você está comprando?')
    let preco = Number(window.prompt(`Qual é o preço de ${produto}?`))

    res.innerHTML = ''

    const h2 = document.createElement('h2')
    h2.innerText = `Calculando desconto de 10% para ${produto}`
    res.appendChild(h2)

    res.appendChild(criarP(`O preço original era R$ ${preco.toFixed(2).replace('.', ',')}.`))
    res.appendChild(criarP(`Você acaba de ganhar R$ ${(0.1 * preco).toFixed(2).replace(`.`, `,`)} de desconto (-10%).`))
    res.appendChild(criarP(`No fim, você vai pagar R$ ${(0.9 * preco).toFixed(2).replace('.', ',')} no produto ${produto}.`))
}