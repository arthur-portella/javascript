let dolar = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')

function converter() {
    const div = window.document.querySelector('div#res')
    let real = window.prompt('Quantos R$ você tem na carteira?')

    div.innerHTML = ''

    const p = document.createElement('p')
    p.innerText = `Com R$${real}, você pode comprar US$${(real/dolar).toFixed(2)}`
    div.appendChild(p)
}