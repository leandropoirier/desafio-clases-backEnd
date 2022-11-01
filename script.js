class Usuario{
    constructor(nombre,apellido,libros,mascotas,contador){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        this.contador = 0
    }

    getFullName(){
        return `El nombre del usuario es ${this.nombre} y su apellido es ${this.apellido}`
    }

    addMascotas (newMascota){
        this.mascotas.push(newMascota)
        console.log(`las mascotas que tiene ${this.nombre} son ${this.mascotas}`)
    }

    countMascotas(){
        this.contador++;
        console.log(`el usuario ${this.nombre} tiene ${this.contador} ${this.mascotas}`)
    }

    addBook(autor,libro){
        this.libros.push({autor:autor,nombre:libro})
        console.log(this.libros)
    }

    getBookNames(){
        const libro = this.libros.map(libros => libros.nombre)
        return libro
    }
}

let leandro =new Usuario("Leandro","Poirier",[],[])

console.log(leandro.getFullName())
console.log(leandro.addMascotas("perro"))
console.log(leandro.countMascotas())
console.log(leandro.addBook("J.K.ROWLING","Harry potter y la piedra filosofal"))
console.log(leandro.getBookNames())
