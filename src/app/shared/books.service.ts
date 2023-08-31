import { Injectable } from '@angular/core';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  //RETO 2 DIA 5
  //Crear un servicio books (ng g service shared/books) que tendrá un atributo privado books
  //que sera un array de libros y con los siguientes métodos públicos:
  // - getAll(): Book[]
  // - getOne(id_libro: number): Book
  // - add(book: Book): void
  // - edit(book: Book): boolean
  // - delete(id_book: number): boolean
  private arrayBooks: Books[]
  constructor() {
    this.arrayBooks = [ 
        new Books(45014882,'La Casa de las sombras','Tapa blanda','Adam Nevill',18,'https://imagessl2.casadellibro.com/a/l/t7/82/9788445014882.jpg'),
        new Books(18945557,'Los crímenes de Hamlet','Tapa dura','Malenka Ramos',20.85,'https://imagessl7.casadellibro.com/a/l/t7/57/9788418945557.jpg'),
        new Books(15618690,'Narraciones Extraordinarias','Tapa blanda','Edgar Allan Poe',15.15,'https://imagessl0.casadellibro.com/a/l/t7/90/9788415618690.jpg'),
        new Books(10032004,'El viento conoce mi nombre','Tapa dura','Isabel Allende',21.75,'https://imagessl4.casadellibro.com/a/l/t7/04/9788401032004.jpg'),
        new Books(37638973,'La ciudad y los perros','Tapa dura','Mario Vargas Llosa',15.15,'https://imagessl3.casadellibro.com/a/l/t7/73/9788437638973.jpg'),
        new Books(20471839,'Cien Años de Soledad','Tapa dura','Gabriel García Marquez',14.15,'https://imagessl9.casadellibro.com/a/l/t7/39/9788420471839.jpg'),
        new Books(18163152,'El Código Da Vinci','Tapa dura','Dan Brown',17,'https://imagessl2.casadellibro.com/a/l/t7/52/9788408163152.jpg'),
        new Books(18253129,'A orillas del río piedra me senté y lloré','Tapa blanda','Paulo Coelho',9.45,'https://imagessl9.casadellibro.com/a/l/t7/29/9788408253129.jpg'),
       ];
   }
  public getAll():Books[]{
    return this.arrayBooks;
  }

  // Mostrar 1 libro
  public getOne(id_book:number):Books{
    let respuesta:Books = null;
    let filtrado: Books[] = this.arrayBooks.filter((libro) => libro.id_book == id_book)
    if (filtrado.length > 0)
      respuesta = filtrado[0]

    console.log(respuesta);
    return respuesta;

}

//RETO4.2 DIA 5-->La funcionalidad asociada a la página AddBook estará asociada al método add del servicio.
//RETO 5 DIA 5• Realizar los cambios necesarios para que se muestre un alert cuando:
public add(newlibro:Books):void{

  this.arrayBooks.push(newlibro);
//RETO 5.1 - Se añada un nuevo libro en la página books.
  //alert('Nuevo libro agregado');
    //console.log('Nuevo Book agregado');
    console.log(newlibro);
  }


//RETO4.3 DIA 5• La funcionalidad asociada a la página UpdateBook estará asociada al método edit del
//servicio.

public edit(libro:Books):boolean{
   let respuesta:boolean = false;
   console.log(libro.price);
  

   for(let i= 0; i < this.arrayBooks.length; i++){

     if(this.arrayBooks[i].id_book == libro.id_book){

       this.arrayBooks[i].title = libro.title != "" ? libro.title : this.arrayBooks[i].title;

       if (libro.title != "") this.arrayBooks[i].type = libro.type;

       this.arrayBooks[i].author = libro.author != '' ? libro.author : this.arrayBooks[i].author

      // para los numero no fuenciona -- buscar solucion
       this.arrayBooks[i].price = !Number.isNaN(libro.price) ? libro.price : this.arrayBooks[i].price

       this.arrayBooks[i].photo = libro.photo != '' ? libro.photo : this.arrayBooks[i].photo
      
       //RETO 5.2 Si el libro se edita correctamente.
      alert('Libro editado correctamente');
       //console.log('libro editado');
       respuesta = true;

     } 

   }
   //
   if (!respuesta) {
    //RETO 5.3 --Si no se encuentra el libro cuando se edite.
    alert('No se encontró el libro para editar');
  }
//
   console.log(this.arrayBooks);
   return respuesta;
 }


//RETO 4.1 DIA 5• La funcionalidad asociada a este botón “X” será la de eliminar, por lo que se debe eliminar
//solo la tarjeta seleccionada utilizando el servicio booksService.
public delete(id_Book:number):boolean{ //el parámetro id_Book-->el ID del libro que se deseo eliminar

     for(let i = 0; i < this.arrayBooks.length; i++){
//se verifica si el id_book del elemento actual en el array es igual al id_Book
// que se proporcionó como argumento. 
       if(this.arrayBooks[i].id_book==id_Book){
         this.arrayBooks.splice(i,1);//elimina ese elemento del array

       } 
    }
    return true;// si se encuentra un libro con el ID especificado y se elimina con éxito
    // return respuesta; Si no se encuentra ningún libro con el ID especificado en el array, 
    //la función igualmente retornará true porque la declaración return true se encuentra fuera del bucle for.
  }
}

