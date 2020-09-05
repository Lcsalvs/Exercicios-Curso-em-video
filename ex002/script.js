function verif(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.getElementById('foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //Criança
                img.innerHTML = `<img src="bb-menino.png" alt="" id="foto">`
            }else if(idade < 21){
                //Jovem
            }else if(idade < 50){
                //adulto
            }else{
                //Idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //Criança
            }else if(idade < 21){
                //Jovem
            }else if(idade < 50){
                //Adulta
            }else{
                //Idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}