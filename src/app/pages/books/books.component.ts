import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  // • El controlador de la pagina debe tener un atributo books que sea un array de objetos Book.
  public books: Books[];

  constructor(){
    this.books = [
    new Books(45014882,'La Casa de las sombras','Tapa blanda','Adam Nevill',18,'https://imagessl2.casadellibro.com/a/l/t7/82/9788445014882.jpg'),
    new Books(18945557,'Los crímenes de Hamlet','Tapa dura','Malenka Ramos',20.85,'https://imagessl7.casadellibro.com/a/l/t7/57/9788418945557.jpg'),
    new Books(15618690,'Narraciones Extraordinarias','Tapa blanda','Edgar Allan Poe',15.15,'https://imagessl0.casadellibro.com/a/l/t7/90/9788415618690.jpg'),
    new Books(10032004,'El viento conoce mi nombre','Tapa dura','Isabel Allende',21.75,'https://imagessl4.casadellibro.com/a/l/t7/04/9788401032004.jpg'),
    new Books(37638973,'La ciudad y los perros','Tapa dura','Mario Vargas Llosa',15.15,'https://imagessl3.casadellibro.com/a/l/t7/73/9788437638973.jpg'),
    new Books(20471839,'Cien Años de Soledad','Tapa dura','Gabriel García Marquez',14.15,'https://imagessl9.casadellibro.com/a/l/t7/39/9788420471839.jpg'),
    new Books(18163152,'El Código Da Vinci','Tapa dura','Dan Brown',17,'https://imagessl2.casadellibro.com/a/l/t7/52/9788408163152.jpg'),
    new Books(18253129,'A orillas del río piedra me senté y lloré','Tapa blanda','Paulo Coelho',9.45,'https://imagessl9.casadellibro.com/a/l/t7/29/9788408253129.jpg'),
    ]
  };

  public agregarBook(nuevoIdBook:number, nuevoTitulo:string, nuevoTipo:string, nuevoAutor:string,nuevoPrecio:number, nuevoFoto:string){
    
    let nuevoBooks = new Books(nuevoIdBook,nuevoTitulo,nuevoTipo,nuevoAutor, nuevoPrecio, nuevoFoto)
    this.books.push(nuevoBooks);
  }

  ngOnInit(): void {
  }

}

