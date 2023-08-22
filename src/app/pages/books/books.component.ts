import { Component} from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public books: Books[];

  constructor(public booksService: BooksService) { 
 
    this.books = booksService.getAll()
  }
//RETO 3.2 DIA 5 .La funcionalidad asociada al buscador (buscar todos o buscar uno) deben utilizar el servicio
//booksService para todas sus operaciones.

public buscar(id_Book: string) {
  if (id_Book !== '') {
    let id = parseInt(id_Book);
    console.log(id);

    // Obtén el libro por el ID
    let libro = this.booksService.getOne(id);

    if (libro) {
      // Si el libro existe, asigna el resultado a this.books
      this.books = [libro];
      console.log(this.books);
    } else {
      //RETO 5.4 DIA 5--En buscar libro, cuando el id no exista mostrar un mensaje indicandolo.
      alert('El libro con el ID especificado no existe.');
    }
  } else {
    //console.log('Todos los libros');
    this.books = this.booksService.getAll();
    console.log(this.books);
  }
}

public borrar(book:Books){
  this.booksService.delete(book.id_book);
};

ngOnInit(): void {
}

}
  // buscar(id_Book:string){

  //   if(id_Book != ''){

  //     let id = parseInt(id_Book)
  //     console.log(id);
      
  //     this.books = [this.booksService.getOne(id)]
  //     console.log(this.books);
      
      
  //   } else {
  //     console.log("Todos los libros");
  //     this.books = this.booksService.getAll()
  //     console.log(this.books);
  //   }
  // }


  // delete(idBook:number):void{
  
  // console.log(idBook);
    
  // this.booksService.delete(idBook);
  // this.books = this.booksService.getAll();

  // }
  // public borrar(id_book:number):void{
  //   this.booksService.delete(id_book);
  // }
 


