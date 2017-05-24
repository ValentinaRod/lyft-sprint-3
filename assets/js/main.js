
//Defino el tablero
var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
]
//Ingreso el auto en la posicion 3,5
tablero[3][5] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables - array que me indiracaran las posiciones en filas y columnas
var fila = [];
var casilla = [];

//Recorro el arreglo para dibujar el tablero

function pintaTablero(){
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}
}

//captura tecla y asigana el valor a la variable direccion
function capturaTecla(){
var tecla=event.keyCode

if(tecla==49 && direccion!=2){
direccion=4
}else if(tecla==50 && direccion!=1){
direccion=3
}else if(tecla==51 && direccion!=4){
direccion=2
}else if(tecla==53 && direccion!=3){
direccion=1
}
event.returnValue = false;
}

//funcion para boton start
function foco("boton2"){
 document.getElementById("boton2").focus();

}


//eventos
var start = getElementById('boton2');
star.addEventListener("click", tablero);
