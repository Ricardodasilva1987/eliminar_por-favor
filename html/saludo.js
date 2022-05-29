

/*var nombre= prompt("INGRESE SE NOMBRE");

if (nombre == "Ricardo" || nombre == "ricardo"){
  console.log("Hola "+ nombre)
}else{
  alert("tu nombre no es Ricardo")
}*/ 

/*let esValido= 0;

if(esValido){
  console.log(" la variable es true")
}*/

/*function saludo(param1){
  console.log("hola como estas " + param1 );
}*/

/*saludo("eggboy");
var apellido = "sapo";
saludo(apellido);
saludo(true);

;*/
/*var numero1 = 2
var numero2 = 3
function suma(){
 

  return numero1+numero2
}

function mastersum (){
  return  numero1 + suma()
}

console.log(mastersum());*/
///////////////////////////////////////////////////////// CICLO FOR///////////////////////
//
/*var listanum =[51,565,1,22,849,5168,6,165468,684535,65498,51684,8461,5,2]
//usando for para manupular arreglos
for(var i = 0; i < listanum.length ; i ++){
  if(listanum[i]% 2 == 0){
    console.log(listanum[i] +" es numero es par");
  }else{
    console.log( listanum[i] +" es numero es impar");
  }


}*/

// probando el while es para buscar un dato especifico

/*var index = 0;
var salirDelWhile = true;

while(salirDelWhile){
  console.log("lista por while " + listanum[index])
  if(listanum[index]==5){
    salirDelWhile=false
  }
  index++
}*/


//SWITCH

/*var nombre = prompt("ingrese su nombre").toUpperCase();
console.log(nombre[0])

switch(nombre[0]){
  case "A" :
    console.log("este nombre empiez por A")
    break
  
  case "R":
    console.log("este nombre empieza por R")
    break
  case "F":
    console.log("este nombre empieza por F")
 break
  
  default:
  console.log("NADA QUE VER")
}*/

//tarea

/*var dias =["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for( var i = 0; i < dias.length ; i++){
  if (i== dias.length-1 ){
    alert(" es el septimo dia" + dias[dias.length-1])
  }
  
  if(i % 2==0){
    console.log(" los dias pares son " + [i] + dias[i])
    
  }else {
    console.log(" estos dias son los impares " +[i]+  dias[i])
  }*/




/*diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

for (var i = 0; i < diasSemana.length; i++) {

   if (i === diasSemana.length - 1) {
      alert("Este es el septimo dia de la semana " + diasSemana[i]);
   }

   if (i % 2 === 0) {
      console.log(diasSemana[i], i);
   }

}*/
/*function sumarPorParamtro(num1,num2){
  var resultado = num1+ num2;
  //alert(resultado)
  return resultado

}
 var recuperarSuma = sumarPorParamtro(2,5);

 var superSuma = recuperarSuma+ sumarPorParamtro(1,1)

 console.log(superSuma)*/



/*function validarPar(param1){
  if(param1 % 2 ==0){
    console.log( "el numero " + param1 + " es par")
  }else{
    console.log(" el numero " + param1 + " es impar")
  }

}



 function validarNumeroPar(num1){
  if(num1 > 1 && num1 <= 10){
    console.log("este numero esta dentro del rango")
    validarPar(num1);
    esValido = true;
  }else{
    console.error("esto no cumple con el rango")
  }
}
   
 
var esValido= false;
 validarNumeroPar(numero);
 validarPar(numero);

 function volverLocoAlUsuario(){
  
   while(!esValido){
     console.log("esValido " + esValido)
    var numero = parseInt(prompt("ingrese un numero"));
    validarNumeroPar(numero)
   }
   console.log("esValido "+ esValido)
 }

 volverLocoAlUsuario();

 //CALLBACK FUNCTIONS

 function mostrarMensaje(){
  console.log("holas mundos de callbacks");

 }

 setTimeout()*/ 

 /*for (let i = 1 ; i <=100 ; i++){
   if(i%3==0 && i%5==0){
     console.log("fizzbuzz ");
   }
    else if(i%3==0){
      console.log("fizz ");
    }
    else if(i%5==0){
      console.log("buzz ");
    }else {
      console.log(i);
    }
 }*/


/*for(let i = 1; i <=20 ; i++){
  let result =" a "
  if(i % 2 === 0){
    result += i
     console.log(result)
  }
}*/

/*for(let i = 1; i <=20 ; i++){
  let result = " ";
  
  if(i % 3 === 0){
    result += "Fizz";
    
  }
  if(i % 5 === 0){
    result += "Buzz";
    
  }
  //console.log(result || i);
  alert((result ))
}*/

//OBJETOS||||||||||||||||||||||||||||||||||||||||||
// para definir un objeto

/*var miAuto = new Object();
miAuto.marca = "Ford";
miAuto.modelo = "Mustang";
miAuto.anio = "1969";

console.log(miAuto.marca)

const miPersona ={ edad :"35", tamanio:"188"}

console.log(miPersona["edad"]);*/

//FORMA DE CREAR UN OBJETO EN EL STANDAR ES5
/*function Auto (argMarca, argModelo, argAnio) {
  this.marca =argMarca;
  this.modelo=argModelo;
  this.anio=argAnio;

  this.arrancar = function (){
    return "El auto arranco"
  }
  this.pagasPatente = function (anioHoy){
   var pagar = anioHoy - this.anio
   //return (pagar < 5)
   if(pagar < 5){
     alert("es menor que 5")
   }else{
     alert (" es mayor")
   }
   
  }
}
var myAuto = new Auto("chevy","corsa",1999);
console.log(myAuto)

var myOtroAuto = new Auto("ford","fiesta",2005);
console.log(myOtroAuto);

var nombrePropiedad = "marca";

var marcaDeAuto = myAuto[nombrePropiedad];
//myAuto.marca

console.log(marcaDeAuto)


var paula=new Ricky(15, 188);
console.log(paula);*/
// 

//creating games madness//

let button = document.getElementById("button");
let fondo= document.getElementById("fondo");

document.getElementById("button").addEventListener("click", function fova() {
  alert("Hello World!");
});


function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
console.log(displayDate());

document.write("hola ricardo da silva");
