function calcular() {
    const res = window.document.querySelector('section#res')

    let a = Number(window.prompt('Qual é o valor de a?'))
    let b = Number(window.prompt('Qual é o valor de b?'))
    let c = Number(window.prompt('Qual é o valor de c?'))

    let delta = Math.pow(b, 2) - 4 * a * c

    res.innerHTML = `<h2>Resolvendo Bhaskara</h2>`

    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`

    res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`

    res.innerHTML += `O valor calculado foi <strong><mark>Δ = ${delta}</mark></strong>`
}