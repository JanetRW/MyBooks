import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public miUser: User

  constructor(){
    this.miUser = new User(2134, "Janet", "Rojas", "jane_row@hotmail.com", "https://scontent.fmad16-1.fna.fbcdn.net/v/t1.6435-9/90623730_959933857742405_8983909343606865920_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_ohc=4KDuJcTjQOMAX-B_F0w&_nc_ht=scontent.fmad16-1.fna&oh=00_AfA6El0i2UuyuWj1BWv5Kco_30bgVWMvwex0XJrd_CCtxw&oe=65020709", "24681012")
  }

  public modificar(nuevoName:HTMLInputElement, nuevoLastName:HTMLInputElement, nuevoEmail:HTMLInputElement,nuevoPhoto:HTMLInputElement){
    console.log(this.miUser.name);
    
    this.miUser.name = nuevoName.value;
    this.miUser.last_name = nuevoLastName.value;
    this.miUser.email = nuevoEmail.value;
    this.miUser.photo = nuevoPhoto.value
  }
}

