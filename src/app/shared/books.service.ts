import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../models/books';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = "http://localhost:3000";
  constructor(private http: HttpClient){}

  // Métodos del servicio
  //-- Método para obtener todos los libros.
  getAll():Observable<Object>{
    return this.http.get(this.url + "/books");
  }

  //-- Método para obtener un solo libro --> buscador.
  getOne(id_book:number):Observable<Object>{
    return this.http.get(this.url + '/books/' + id_book);
  }

  //-- Método para añadir un libro --> Funcionalidad de la pg Add Book.
  add(book:Books):Observable<Object>{
    return this.http.post(this.url+"/books", book);
  }

  //-- Método para editar un libro --> Funcionalidad de la pg Update Book.
  edit(book:Books):Observable<Object>{
    return this.http.put(this.url + "/books", book);
  }

  //-- Método para borrar un libro --> Funcionalidad del botón 'X' de las cards de cada libro.
  delete(id_book:number):Observable<Object>{
    return this.http.request('delete', this.url + "/books", {body:{id_book:id_book}});
  }
}