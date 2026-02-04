function carregar() { 
    let agora = new Date() 
    let hora = agora.getHours() 
    let texto = window.document.querySelector('div#texto') 
    let imagem = window.document.getElementById('imagem') 
    texto.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora <= 12) { 
        imagem.src = 'manha.png' 
        window.document.body.style.background = '#e2cd9f'
    } else if (hora <= 18) { 
        imagem.src = 'tarde.png' 
        window.document.body.style.background = '#b9846f'
    } else { 
        imagem.src = 'noite.png' 
        window.document.body.style.background = '#515154'
    } 
}