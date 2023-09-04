import { Books } from 'src/app/models/books';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksComponent } from '../../pages/books/books.component';
import { BooksService } from '../../shared/books.service';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  //Para la comunicación PADRE-HIJO los decoradores @Input
  @Input() book: Books; 
  @Input() esPar: boolean;
  //Para la comunicación HIJO-PADRE,el nombre del evento es bookEliminado
  @Output() bookEliminado = new EventEmitter<Books>();
  public books: Books[];
  constructor(){}
  
  //Aquí Comunicación HIJO-PADRE se crea la función eliminarBook() 
  delete():void{
    this.bookEliminado.emit(this.book); //emit--> hace que emita el evento bookEliminado
  }

}