import { Books } from "./books";

export class Respuesta {
    data?: Books;
    constructor(public error:boolean,
                public codigo:number,
                public mensaje:string,
                public res?:Books[],
                public res_book?: Books){}
                
}