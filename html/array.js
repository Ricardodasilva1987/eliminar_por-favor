function MyItem (argNombre){
    this.nombre = argNombre
}

var miCarrito = [];

var misItems = 8

for(i = 0; i <= misItems; i ++){
    let producto = new MyItem( "itemnumero " + i)
    miCarrito.push(producto);

}

console.log(miCarrito)


var parrafo = document.getElementById("parrafo")

console.log(parrafo);

var parrafo2 = document.getElementById("parrafo").innerHTML

var creation = document.createElement("p");
document.body.appendChild(creation);




