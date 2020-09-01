function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() //Pode-se alterar a variável para a hora desejada e verificar cada condição abaixo.

    msg.innerHTML = `Agora são ${hora} horas`

    //Condicional que verifica a hora e retorna uma imagem e uma cor de fundo associada.

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src ='tarde.png'
        document.body.style.background = 'orange'
    }else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}