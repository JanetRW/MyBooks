import { Component,OnInit } from '@angular/core';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';
import { Books } from 'src/app/models/books';
import { Route } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  // public mybooks:Books[];
  public mybooks:Books;
  //public book:void
  constructor(public booksService: BooksService){
  }
  ngOnInit(): void {
  }
  public crearBook(newIdBook:string, newtitulo:string, newtipo:string, newautor:string, newprecio:string, newfoto:string):void{
    
    let precioNum = parseInt(newprecio)
    let IdNum = parseInt(newIdBook)

    let newBook = new Books (IdNum, newtitulo, newtipo, newautor, precioNum, newfoto)

    this.booksService.add(newBook).subscribe((res:Respuesta)=>{
      if (!res.error)
      {
        alert("Libro agregado correctamente");
        
      } 
      else
          alert("No se agregó libro");

     })
     console.log(this.mybooks);
  }

}