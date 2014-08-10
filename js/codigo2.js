//se definen los valores de las posibles selecciones del usario y la maquina
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var seleccionMaquina ;
var seleccionUsuario ;

/*Se crea un arreglo con las opciones tanto para maquina como para el usuario y se crea arreglos
con los reultados de cada seleccion en forma de matriz*/
var opciones =["Piedra","Papel","Tijera","Lagarto","Spock"]; 
var matrizResultados0 = ["Empate", "Perdiste", "Ganaste", "Ganaste", "Perdiste"];
var matrizResultados1 = ["Ganaste", "Empate", "Perdiste", "Ganaste", "Perdiste"];
var matrizResultados2 = ["Perdiste", "Ganaste", "Empate", "Ganaste", "Perdiste"];
var matrizResultados3 = ["Perdiste", "Ganaste", "Perdiste", "Empate", "Ganaste"];
var matrizResultados4 = ["Ganaste", "Perdiste", "Ganaste", "Perdiste", "Empate"];
var matrizResultados = [matrizResultados0, matrizResultados1, matrizResultados2, matrizResultados3, matrizResultados4];

//se solicita y guarda la opcion del usuario y la maquina
seleccionUsuario = prompt("Selecione \n0 Piedra\n1 Papel\n2 Tijera\n3 Lagarto\n4 Spock\n", "0");
seleccionMaquina = (Math.floor(Math.random() * 5));

//se muestran las opciones seleccionadas por cada contricante
alert("Tu seleccionaste " + opciones[seleccionUsuario]);
alert("Tu oponenete selecciona " + opciones[seleccionMaquina]);

//Usando el conjunto de arreglos en forma de una matriz damos el resultado
alert(matrizResultados[seleccionUsuario][seleccionMaquina]);
