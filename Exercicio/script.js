function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
msg.innerHTML = "Agora são " + hora + " horas" 
    if(hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = "manha.png.jpg"
        document.body.style.background = '#e2ab44'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde !
        img.src = "tarde.jpg"
        document.body.style.background = '#e24e4e'
    } else {
        //Boa noite!
        img.src = "noite.jpg"
        document.body.style.background ='#020277'
    }
    }