addEventListener('load', hour);

function hour() {
    var horaAtual = 18;
    var img = document.getElementById('photo');
    /*Horario em tempo real
    var data = new Date();
    var hora = data.getHours();*/
    var msgHoras = document.getElementById('seeHour');
    msgHoras.innerHTML = `Agora são ${horaAtual} horas`;
    var sauda = document.getElementById('saudation');

    if (horaAtual <= 12) return img.src = 'manha.jpg', msgHoras,
        document.body.style.background = 'rgb(244,228,220)', sauda.innerHTML = "Bom dia!";

    else if (horaAtual > 12 & horaAtual <= 18) return img.src = 'tarde.jpg', msgHoras,
        document.body.style.background = 'rgb(239,170,81)', sauda.innerHTML = "Boa tarde!";

    else if (horaAtual > 18 & horaAtual <= 23) return img.src = 'noite.jpg', msgHoras,
        document.body.style.background = 'rgb(36,68,91)', sauda.innerHTML = "Boa noite!";

    else if (horaAtual > 23) return img.src = "erro.jpg",
        msgHoras.innerHTML = 'Horario Incorreto!';
}