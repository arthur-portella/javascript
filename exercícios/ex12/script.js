function clicar() {
    let num = Number(window.prompt(`Digite um número:`))

    const res = window.document.querySelector(`section#res`)

    let p
    if (num % 2)
        p = 'ÍMPAR!'
    else 
        p = 'PAR!'

    res.innerHTML = `<p>O número ${num} que foi digitado é <strong>${p}</strong></p>`
}