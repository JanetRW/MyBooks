// Reto 5 DIA3
// • Crear un pipe que permita mostrar los códigos de los libros en el siguiente formato:
// Ref-301020.
// • El número hace referencia al atributo id_book.
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ref'
})
export class RefPipe implements PipeTransform {

  transform( value: number ): string {
    return 'Ref-' + value;
    // por ejemplo en el navegador ingresaré en Id libro: 12345678 y me mostrará Ref-12345678
  }

}
