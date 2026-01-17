function calcular() {
    let n1 = Number(window.prompt(`Digite um número:`))
    let n2 = Number(window.prompt('Digite outro número'))

    const res = window.document.querySelector('section#res')

    if (n1 > n2)
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong></p>`
    else if (n2 > n1)
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong></p>`
    else if (n1 == n2)
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong></p>`

    res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n1}</mark>, ${maior}</p>`
}