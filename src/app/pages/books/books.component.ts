import { Component} from '@angular/core';
import { Books } from 'src/app/models/books';
import { BooksService } from 'src/app/shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public books: Books[];
 

  constructor(public booksService: BooksService, public userService: UserService) { 

    this.obtenerTodosLosLibros();

  }
  ngOnInit(): void {
    //this.user = this.userService.user
    //console.log(this.user)
   
  }

borrar(id_Book:number):void{
  this.booksService.delete(id_Book).subscribe((res:Respuesta)=>{
    console.log(id_Book);
    
    if (res.error == false) {
     
      this.books = this.books.filter(book => book.id_book != id_Book);
        console.log(res);
      

        //this.obtenerTodosLosLibros();

    }
  })
}


obtenerTodosLosLibros(){
 
  this.booksService.getAll(this.userService.user.id_user).subscribe((res:Respuesta)=>{
    //console.log(res);
    
    this.books = res.result;
    
    })
}

buscar(id_Book:number){
  console.log("num search_id: ", id_Book);
  
  if(id_Book){

    // this.booksService.getOne(id_Book).subscribe((res:Respuesta)=>{
      this.booksService.getOne(this.userService.user.id_user, Number(id_Book)).subscribe((res:Respuesta)=>{
      this.books = [res.data];
    });
  }/*else{
    this.booksService.getAll().subscribe((res:Respuesta)=>{
      this.books = res.res;
    });
  }*/
}
}