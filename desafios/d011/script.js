function verificar() {
    let ano = Number(prompt('Qual é o ano que você quer verificar?'))

    const saida = document.getElementById('saida')
    saida.innerHTML = ''

    const h2 = document.createElement('h2')
    h2.textContent = `Analisando o ano de ${ano}...`
    saida.appendChild(h2)

    const p = document.createElement('p')
    p.textContent = `O ano de ${ano} `

    const strong = document.createElement('strong')

    if (((ano % 100 === 0) && (ano / 400 % 1 === 0)) || ((ano % 100 !== 0) && (ano / 4 % 1 === 0))) {
        strong.textContent = 'É BISSEXTO'
        strong.classList.add('bissexto')
        p.appendChild(strong)
        p.append(' ✅')
    } else {
        strong.textContent = 'NÃO É BISSEXTO'
        strong.classList.add('nao-bissexto')
        p.appendChild(strong)
        p.append(' ❌')
    }

    saida.appendChild(p)
}