import { Component} from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Books[];

  constructor(public booksService: BooksService) { 
    this.booksService.getAll().subscribe((data:Respuesta)=>{
      console.log(data);
      
      this.books = data.res;
      console.log(data.res);
      })

  }


borrar(id_Book:number):void{
  this.booksService.delete(id_Book).subscribe((res:Respuesta)=>{
    console.log(id_Book);
    
    if (res.error == false) {
     
      this.books = this.books.filter(book => book.id_book != id_Book);
        console.log(res);
      
    }
  })
}

buscar(id_Book:number){
  console.log("num search_id: ", id_Book);
  
  if(id_Book){
    this.booksService.getOne(id_Book).subscribe((res:Respuesta)=>{
      this.books = [res.res_book];
    });
  }else{
    this.booksService.getAll().subscribe((res:Respuesta)=>{
      this.books = res.res;
    });
  }
}
}