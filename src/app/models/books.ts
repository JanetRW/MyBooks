export class Books {
    
    public id_user: number
    
        constructor(public id_book: number,public title: string,public type: string,public author: string,public price: number,public photo: string){
            this.id_book = id_book;
            this.id_user = 0;
            this.title = title;
            this.type = type;
            this.author = author;
            this.price = price;
            this.photo = photo;
            
        }
    }
