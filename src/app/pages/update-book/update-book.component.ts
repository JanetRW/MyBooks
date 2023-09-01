import { Component } from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public mybooks:Books;

  constructor(public booksService : BooksService) { }


  public modificarBook(newIdBook:string, newtitulo:string, newtipo:string, newautor:string, newprecio:string, newfoto:string){
    let precioNum = parseInt(newprecio)
    let IdNum = parseInt(newIdBook)
    console.log(precioNum);
    

    let newBook = new Books (IdNum, newtitulo, newtipo, newautor, precioNum, newfoto);
    this.booksService.edit(newBook).subscribe((data:Respuesta)=>{
  
    console.log(newBook);

    if (!data.error)
    {
      alert("Libro editado");
      
    } 
    else
      alert("No se encuentra libro para editar");

   })
   console.log(this.mybooks);
  }

    
  }
