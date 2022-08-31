autores = ["Katya Adaui", "Jaime Bayly", "Cesar Vallejo", "Gabriela Wiener", "Renato Cisneros", "Jeremías Gamboa", "Mario Vargas Llosa", "Oscar Colchado", "Alain Espinoza", "Luis Loayza", "Blanca Valera", "Maria José Caro", "Malena Newton", "Oscar Malca"]
obras = ["Aquí hay icebergs", "No se lo digas a nadie", "Yo amo a mi mami", "Poemas humanos", "Llamada perdida", "Huaco retrato", "La distancia que nos separa", "Contarlo todo", "Animales luminosos", "Conversación en La Catedral", "La ciudad y los perros", "La verdad de las mentiras", "Medio siglo con Borges", "La fiesta del chivo", "La llamada de la tribu", "La casa verde", "El colector", "El sol de Lima", "Colección", "Perro ojos pardo", "Selección peruana 2021", ]

autores.push("Jorge Eslava")

console.log(autores)




//Lista de libros

const libros = []

//método para agregar un libro a la lista
const create = (libro) => {
    libros.push(libro)
//    localStorage.setItem("libros", JSON.stringify(libros))
}


//Método que retorna la lista de libros

/*const findOne = (nombres) => {
    Product = Product.find( libro => libro.novela === nombres) 

    if(!Product) {
        throw new Error (`No existe ${nombre}`)
            
    return Product
        }
    }


/*const  getALL = () => {
    libros = JSON.parse(localStorage.getItem("libros"))
    return libros;
}


/*
const libro

create(libro1)
create(libro2)
create(libro3)
create(libro4)
*/
// Crear libro nuevo como instancia de clase Libro

//const libro1 = new libros("Sol tan lejos", )


/*console.log(getALL())

*/
//Obtener DOM 

const listaLibros = document.getElementById("lista-libros")
console.log(listaLibros)

// agregar libros a la lista de Libro para el

for (libro of libros) {
    
    console.log(libro)
    
    let itemLibro = document.createElement("libro")
    
    itemLibro.textContent = libro.nombre

    listaLibros.appendChild(itemLibro)

}

// Clase Product para referirse a la novela, precio y si está en stock


class Product {

    constructor( novela, precio, enStock, editorial) {

        this.novela = novela;
        this.precio = precio;
        this.enStock = enStock;
        this.editorial = editorial;

    }

    pedir() {
        console.log("Hola, qué libro desea ordenar");
    }
    //Descuento de diez soles por el aniversario patrio
    RestarPrecioPatrio() {
        return this.precio - 10
    }

    getPrecio() {
        return this.precio
    }

}

const product1 = new Product("El sueño del celta", 89, "disponible", "Alfaguara");
const product2 = new Product("Historia de un deicidio", 79, "no disponible", "Alfaguara");

create(product1);
create(product2);


console.log(product1);

//Método que retorna la lista de libros

const findOne = (novela) => {
    Product = Product.find( Product => Product.novela === novela) 


    console.log(Product)

    if(!Product) {
        throw new Error (`No existe ${novela}`)
            
            }
}

console.log(findOne("moriras mañana"))

console.log(product1.getPrecio());
console.log(product1.RestarPrecioPatrio());


// Función que permite aplicar el descuento patrio de 10% a todos los libros. Por el bicentenario del Perú se realiza la promoción.

let ingresarMoneda = prompt("ingrese el valor") 
let restado = mostrarResta(ingresarMoneda)

function ingresarPrecio(valor){

    
    return valor;
}

restado=ingresarPrecio(ingresarMoneda)


function promocion(resultado){
    return resultado * 0.10;

}

restado=(promocion(restado));

function mostrarResta(precioFinal, precioBase) {
    if(precioBase<0){
        console.log("Monto incorrecto")
    }
    console.log("El precio con descuento es de: " + precioFinal);
    console.log("El precio inicial es de: " + precioBase);
}


// Función que indica el tipo de descuento que recibirás por tu grado académico.

function descuentoEstudiantil() {


    let i = Number(prompt("Ingresar edad. No olvide ingresar DNI al momento de la compra"));
    
        if ((i <= 10)) {
            alert("Ud. asiste a primaria. Tiene un 50% de descuento en libros seleccionados");
        
        }
        
    
            else if ((i <= 18)) {
                alert("Ud. asiste a secundaria. Tiene un 40% de descuento en libros seleccionados");
                }
    
            else if ((i <= 30)) {
                alert("Ud. asiste a la universidad. Tiene un 25% de descuento en libros seleccionados");
                }
    
            else ((i = ""))   
                alert()
            
            
    }
     
    
    
    descuentoEstudiantil(46);

// Funciòn que permite conocer el nùmero de cuotas por un producto según el tiempo de pago

let pagoCuotas = (numeroDeCuotas, importe) => {
    switch (Number(numeroDeCuotas)) {
      case 1:
        console.log(importe);
      break;
    
    case 3: case 6:
      for   (let i = 1; i <= numeroDeCuotas; i++) {
        console.log("cuota n°------------" + i)
        console.log(importe * 1.2 / numeroDeCuotas)
      }
  
      break;
    case 9: case 12:
      for  (let i = 1; i <= numeroDeCuotas; i++) {
          console.log("cuota n°------------" + i)
          console.log(importe * 1.50 / numeroDeCuotas)
        }
        break;
      default:
          console.log(prompt("Por favor, ingrese 1, 3, 6, 9 o 12 cuotas"));
        break;
      }
    }
    pagoCuotas(9, 780)  



