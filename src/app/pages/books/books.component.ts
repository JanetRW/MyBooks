import { Component} from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
//import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Books[];

  constructor(public booksService: BooksService) { 
   /*  this.booksService.getAll().subscribe((res:Respuesta)=>{
      console.log(res);
      
      this.books = res.res;
      console.log(res.res);
      }) */
      this.obtenerTodosLosLibros();

  }


borrar(id_Book:number):void{
  this.booksService.delete(id_Book).subscribe((res:Respuesta)=>{
    console.log(id_Book);
    
    if (res.error == false) {
     
      this.books = this.books.filter(book => book.id_book != id_Book);
        console.log(res);
      

        this.obtenerTodosLosLibros();

    }
  })
}


obtenerTodosLosLibros(){
  this.booksService.getAll().subscribe((res:Respuesta)=>{
    console.log(res);
    
    this.books = res.res;
    console.log(res.res);
    })
}

buscar(id_Book:number){
  console.log("num search_id: ", id_Book);
  
  if(id_Book){
    this.booksService.getOne(id_Book).subscribe((res:Respuesta)=>{
      this.books = [res.data];
    });
  }else{
    this.booksService.getAll().subscribe((res:Respuesta)=>{
      this.books = res.res;
    });
  }
}
}