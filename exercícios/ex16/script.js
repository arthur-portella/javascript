function iniciar() {
    let agora = new Date
    let ano = agora.getFullYear()

    let ano_nascimento = Number(window.prompt('Em que ano você nasceu?'))

    const saida = window.document.querySelector('section#saida')

    saida.innerHTML = `<p>Quem nasceu em ${ano_nascimento} vai completar <strong>${ano - ano_nascimento}</strong> anos em 2026.</p>`
}