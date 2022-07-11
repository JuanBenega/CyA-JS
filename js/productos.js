let precioProducto = [];
let producto = [];
let listaProductos = "";
let total = 0;
let carrito = [];
let precioFiltro;
let productosFiltrados = [];
let opcionFiltro;
let carritoDom = document.getElementById("carrito");
let mainDom = document.getElementById("main-productos");

let cantProductos = 10;
let salir = false;



function ingresoProductos(n, lista) {
    let productoingresado = prompt("Elija el producto " + n + " a comprar: \n" + lista + "\nPresione 0 para salir.");
    return productoingresado;
}


let Productos = [
    { item: 1, nombre: "Crema facial", precio: 750 },
    { item: 2, nombre: "Crema corporal", precio: 1200 },
    { item: 3, nombre: "Shampoo sólido", precio: 500 },
    { item: 4, nombre: "Shampoo líquido", precio: 750 },
    { item: 5, nombre: "Crema de anjuague", precio: 800 },
    { item: 6, nombre: "Jabón natural", precio: 300 }
];

for (const iterator of Productos) {
    listaProductos += `${iterator.item}. ${iterator.nombre} - $${iterator.precio}\n`;;
}

// console.log(Productos);
while (salir === false) {
    let item = [];
    carrito = [];
    alert("Hola elegí tu producto para agregar al carrito de compras.\nPresioná ACEPTAR para continuar.");
    let filtro = prompt("¿Querés aplicar algún filtro para los precios?\n\nIngresá S/N").toLocaleLowerCase();
    if (filtro === "s") {
        opcionFiltro = prompt("Presione 8 para filtrar por precio menor." + "\nPresione 9 para filtrar por precio mayor.");
        if (opcionFiltro == 8) {
            precioFiltro = prompt("Ingresa el precio máximo por el que querés filtrar");
            productosFiltrados = Productos.filter((el) => {
                return el.precio < precioFiltro;
            })
            listaProductos = [];
            for (const iterator of productosFiltrados) {
                listaProductos = listaProductos + iterator.item + iterator.nombre + " - " + iterator.precio + "\n";
            }
        } else if (opcionFiltro == 9) {
            precioFiltro = prompt("Ingresa el precio mínimo por el que querés filtrar");
            productosFiltrados = Productos.filter((el) => {
                return el.precio > precioFiltro;
            })
            listaProductos = [];
            for (const iterator of productosFiltrados) {
                listaProductos = listaProductos + iterator.item + iterator.nombre + " - " + iterator.precio + "\n";
            }
        } else {
            alert("Opción incorrecta vuelva a cargar la página para reiniciar la compra");
            break;
        }
    } else if (filtro != "n") {
        alert("Opción incorrecta vuelva a cargar la página para reiniciar la compra");
        break;
    }

    for (let i = 0; i < 100; i++) {
        producto[i] = ingresoProductos(i + 1, listaProductos);
        if (producto[i] != "0") {
            if (parseInt(producto[i]) < 7) {
                carrito.push(Productos[producto[i] - 1]);
                item = `${carrito[i].item}. ${carrito[i].nombre} - $${carrito[i].precio}\n`;
                let li=document.createElement("li");
                li.innerHTML = item;
                carritoDom.appendChild(li);
            } else {
                alert("Opción incorrecta");
                break;
            }
        } else {
            salir = true;
            for (const iterator of carrito) {
                total += iterator.precio;
            }
            break;
        }
        if (i == cantProductos) {
            salir = true;
        }
    }

    if (total != 0) {
        alert("El total de la compra es: $" + total + "\n\n¡Muchas gracias por tu compra!");
        let cartelTotal = document.createElement("h3");
        cartelTotal.innerHTML = `El total de la compra es $${total}`;
        mainDom.append(cartelTotal);
    } else {
        alert("Esperamos que la próxima nos elijas...")
    }

}
