function clicou() {
    let data = new Date()
    const saida = window.document.querySelector('section#saida')

    saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${data}</mark></p>`
}