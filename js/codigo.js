//se definen los valores de las posibles selecciones del usario y la maquina
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var seleccionMaquina ;
var seleccionUsuario ;

//Se crea un arreglo con las opciones 
var opciones =["Piedra","Papel","Tijera","Lagarto","Spock"]; 

//se solicita y guarda la opcion del usuario y la maquina
seleccionUsuario = prompt("Selecione \n0 Piedra\n1 Papel\n2 Tijera\n3 Lagarto\n4 Spock\n", "0");
seleccionMaquina = (Math.floor(Math.random() * 5));


alert("Tu seleccionaste " + opciones[seleccionUsuario]);
alert("Tu oponenete selecciona " + opciones[seleccionMaquina]);

//condicional si el usuario eligio piedra
if (seleccionUsuario == piedra && (seleccionMaquina == spock || seleccionMaquina == papel)  )

{
	alert("Perdiste");
}

else if (seleccionUsuario == piedra && (seleccionMaquina == tijera || seleccionMaquina == lagarto)  )

{
	alert("Ganaste");
}
else if (seleccionMaquina == piedra && seleccionUsuario == piedra)
{
	alert("Empate");
}

//condicional si el usuario eligio papel
if (seleccionUsuario == papel && (seleccionMaquina == tijera || seleccionMaquina == lagarto)  )

{
	alert("Perdiste");
}

else if (seleccionUsuario == papel && (seleccionMaquina == spock || seleccionMaquina == piedra)  )

{
	alert("Ganaste");
}
else if (seleccionMaquina == papel && seleccionUsuario == papel)
{
	alert("Empate");
}

//condicional si el usuario eligio tijera
if (seleccionUsuario == tijera && (seleccionMaquina == piedra || seleccionMaquina == spock)  )

{
	alert("Perdiste");
}

else if (seleccionUsuario == tijera && (seleccionMaquina == papel || seleccionMaquina == lagarto)  )

{
	alert("Ganaste");
}
else if (seleccionMaquina == tijera && seleccionUsuario == tijera)
{
	alert("Empate");
}

//condicional si el usuario eligio lagarto
if (seleccionUsuario == lagarto && (seleccionMaquina == tijera || seleccionMaquina == piedra)  )

{
	alert("Perdiste");
}

else if (seleccionUsuario == lagarto && (seleccionMaquina == spock || seleccionMaquina == papel)  )

{
	alert("Ganaste");
}
else if (seleccionMaquina == lagarto && seleccionUsuario == lagarto)
{
	alert("Empate");
}

//condicional si el usuario eligio spock
if (seleccionUsuario == spock && (seleccionMaquina == papel || seleccionMaquina == lagarto)  )

{
	alert("Perdiste");
}

else if (seleccionUsuario == spock && (seleccionMaquina == tijera || seleccionMaquina == piedra)  )

{
	alert("Ganaste");
}
else if (seleccionMaquina == spock && seleccionUsuario == spock)
{
	alert("Empate");
}
