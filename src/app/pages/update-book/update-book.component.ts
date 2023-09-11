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
  ngOnInit(): void {
  }

  public modificarBook(newIdBook:string, newtitulo:string, newtipo:string, newautor:string, newprecio:string, newfoto:string){
    let precioNum = parseInt(newprecio)
    let IdNum = parseInt(newIdBook)
    console.log(precioNum);
    

    let bookEdited = new Books (IdNum, newtitulo, newtipo, newautor, precioNum, newfoto);
    this.booksService.edit(bookEdited).subscribe((res:Respuesta)=>{
    // console.log('Respuesta del servicio:', res);
    console.log('Datos del libro a editar:', bookEdited);

    if (!res.error)
    {
      alert("Libro editado");
      this.mybooks = res.res_book;
      console.log(res.res_book);
    } 
    else
      alert("No se encuentra libro para editar");

   })
   console.log(this.mybooks);
  }

    
  }

  
/*     let editBook: Books = new Books(id_book,id_user,title,type,author,price,photo)
    
    
    this.bookService.edit(editBook).subscribe((data:Response)=>{
      console.log(editBook);
    if (!data.error)
    {
      alert("Has editado un libro");
      
    } 
    else
    alert("No se encuentra el libro");

   })
   console.log(this.books);
  }

    
  }
 */