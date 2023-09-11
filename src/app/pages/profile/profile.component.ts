
import { Component} from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import {Router} from "@angular/router"
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  public miUser: User;

  constructor(public userService: UserService, private router: Router){
    //this.miUser = new User(2134, "Janet", "Rojas", "jane_row@hotmail.com", "https://scontent.fmad16-1.fna.fbcdn.net/v/t1.6435-9/90623730_959933857742405_8983909343606865920_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_ohc=4KDuJcTjQOMAX-B_F0w&_nc_ht=scontent.fmad16-1.fna&oh=00_AfA6El0i2UuyuWj1BWv5Kco_30bgVWMvwex0XJrd_CCtxw&oe=65020709", "24681012")
    this.miUser = this.userService.user;
    // console.log( this.userService.user);
    if (this.miUser.photo == null) {
      this.miUser.photo = "https://scontent.fmad16-1.fna.fbcdn.net/v/t1.6435-9/90623730_959933857742405_8983909343606865920_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=be3454&_nc_ohc=4KDuJcTjQOMAX-B_F0w&_nc_ht=scontent.fmad16-1.fna&oh=00_AfA6El0i2UuyuWj1BWv5Kco_30bgVWMvwex0XJrd_CCtxw&oe=65020709";
    
    }
 
  }

 
  public modificar(nuevoName:HTMLInputElement, nuevoLastName:HTMLInputElement, nuevoEmail:HTMLInputElement,nuevoPhoto:HTMLInputElement){
 
  
    if(nuevoName.value=="" ||
       nuevoLastName.value=="" ||
       nuevoEmail.value=="" ||
       nuevoPhoto.value=="")
       console.log("los datos no son correctos")
    else
    {
      let editedUser=new User(this.userService.user.id_user,nuevoName.value,nuevoLastName.value,nuevoEmail.value,nuevoPhoto.value,null);
      this.userService.editUser(editedUser).subscribe((res: any)=>{
        if(res!=null)
          {
            console.log("Usuario modificado satisfactoriamente");
           /*  nuevoName.value="";
            nuevoLastName.value="";
            nuevoEmail.value="";
            nuevoPhoto.value=""; */
            this.miUser.name = nuevoName.value;
            this.miUser.email = nuevoEmail.value;
            this.miUser.last_name = nuevoLastName.value;
            this.miUser.photo = nuevoPhoto.value;
          }
        else
          console.log("No se ha podido Modificar Usuario");
    });
    }
  }
}