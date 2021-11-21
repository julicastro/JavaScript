window.onload = function name() {
    document.onkeydown = chars;
    document.onchange = color;

}

function color() {
    setInterval(() => {
        var br = document.getElementById("cuadrado").style.borderRadius;
        if (br = "0%") {
            document.getElementById("cuadrado").style.borderRadius = "50%";
            document.getElementById("cuadrado").style.background = "blue";
        } else {
            document.getElementById("cuadrado").style.borderRadius = "50%";
            document.getElementById("cuadrado").style.background = "yellow";
        }
    }, 2000);

}


var leftRight = 0;
var topBottom = 0;

var leftRigth2 = 0;
var topBottom2 = 0;


function chars(evento) {
    if (window.event) {
        evento = window.event;
        document.getElementById("string").innerHTML = evento.keyCode;
        caracteres(evento.keyCode);
    }
}

function caracteres(chars) {
    if (chars === 39) {
        leftRight += 10;
        document.getElementById("cuadrado").style.marginLeft = leftRight + "px";
    }
    if (chars === 37) {
        leftRight += -10;
        document.getElementById("cuadrado").style.marginLeft = leftRight + "px";
    }
    if (chars === 38) {
        topBottom += -10;
        document.getElementById("cuadrado").style.marginTop = topBottom + "px";
    }
    if (chars === 40) {
        topBottom += 10;
        document.getElementById("cuadrado").style.marginTop = topBottom + "px";
    }
    if (chars === 68) {
        leftRigth2 += 10;
        document.getElementById("cuadrado-2").style.marginLeft = leftRigth2 + "px";
    }
    if (chars === 65) {
        leftRigth2 += -10;
        document.getElementById("cuadrado-2").style.marginLeft = leftRigth2 + "px";
    }
    if (chars === 87) {
        topBottom2 += -10;
        document.getElementById("cuadrado-2").style.marginTop = topBottom2 + "px";
    }
    if (chars === 83) {
        topBottom2 += 10;
        document.getElementById("cuadrado-2").style.marginTop = topBottom2 + "px";
    }
    if (chars === 13) {

    }
}

function cambio() {



}

