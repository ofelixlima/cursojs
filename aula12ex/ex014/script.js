function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 16 // Testes de cores para cada horário
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'foto-manha.png'
        document.querySelectorAll('#contra_cor').forEach(element => {
            element.style.color = '#131A12'
        })
        document.body.style.background = "#F8F3D6"
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'foto-tarde.png'
        document.querySelectorAll('#contra_cor').forEach(element => {
            element.style.color = '#632903'
        })
        document.body.style.background = "#F5E659"
    } else {
        //BOA NOITE!
        img.src = 'foto-noite.png'
        document.querySelectorAll('#contra_cor').forEach(element => {
            element.style.color = '#DFC893'
        })
        document.body.style.background = "#012F41"
    }
}
