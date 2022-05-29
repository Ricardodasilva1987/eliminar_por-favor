

/*let frutas = [];

let fruta = prompt("bienvenido al mercado, que elemento desea comprar");

frutas.push(fruta);



while(confirm("desea compra otra fruta?")){
    
    let fruta = prompt("bienvenido al mercado, que elemento desea comprar");
    frutas.push(fruta);
}

console.log(" COMPRASTE : " )

for( let fruta of frutas){
    
    console.log(fruta)
}*/
console.log("jugando con el dom")
console.log(document);
//console.log(document.getElementById("parrafo").textContent)
const p = document.querySelector("#parrafo")




const button = document.querySelector("#boton");

console.log(button);

button.addEventListener("click", () => {
    console.log("me diste click")
    p.textContent = "texto desde  JS por click"
    p.style.color= "red"
})

//frutas =["cambur", "uva", "manzana","mandarina","pera", "coco"];


/*let frutasAcum = " ";

for (i = 0 ; i < frutas.length ; i++){
   frutasAcum += " " +  frutas[i]
   
   
    console.log(frutasAcum)

}*/





/*let fruta = " "
for(fruta of frutas){
    fruta += " " + fruta;
    console.log(fruta)
}*/
/*let conteo = " "
for (let i = 1 ; i <= 5 ; i++){
  {
    conteo += " " +  i;

    console.log(conteo)
    }
}*/