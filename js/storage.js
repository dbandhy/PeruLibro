autores = [Adaui, Bayly, Wiener, Cisneros, Gamboa, VargasLlosa, Colchado, Espinoza, Loayza, Caro, Newton, Malca]
console.log(autores)





//Lista de libros

const libros = []

//método para agregar un libro a la lista
const create = (libro) => {
    libros.push(libro)
    localStorage.setItem("libros", JSON.stringify(libros))
}


//Método que retorna la lista de libros

/*const  getALL = () => {
    libros = JSON.parse(localStorage.getItem("libros"))
    return libros;
}


/*
create(libro1)
create(libro2)
create(libro3)
create(libro4)
*/
// Crear libro nuevo como instancia de clase


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