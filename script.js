function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    // PARA TESTE var hora = 17
    msg.innerHTML = "Agora são " + hora + " horas";
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "/current-time/img/manha1.png";
        document.body.style.background = "#ffd876";
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = "/current-time/img/tarde1.png";
        document.body.style.background = "#825057";
    } else {
        //BOA NOITE
        img.src = "/current-time/img/noite1.png";
        document.body.style.background = "#131720";
    }
}
