function analisar() {
    const dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    let agora = new Date

    let dia = agora.getDate()
    let mes = meses[agora.getMonth()]
    let ano = agora.getFullYear()
    let semana = dias[agora.getDay()]
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()

    const saida = window.document.querySelector('section#saida')

    saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    saida.innerHTML += `<p>Mês: <mark>${mes}</mark></p>`
    saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    saida.innerHTML += `<p>Dia da semana: <mark>${semana}</mark></p>`
    saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    saida.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`

}