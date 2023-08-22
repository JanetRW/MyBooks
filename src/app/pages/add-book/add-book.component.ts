import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  public mybooks:Books;

  constructor(private booksService : BooksService) { }


  crearBook(newIdBook:string, newtitulo:string, newtipo:string, newautor:string, newprecio:string, newfoto:string){
    
    let precioNum = parseInt(newprecio)
    let IdNum = parseInt(newIdBook)

    let newBook = new Books (IdNum, newtitulo, newtipo, newautor, precioNum, newfoto)

    this.booksService.add(newBook);
   
  }

  ngOnInit(): void {
  }

}