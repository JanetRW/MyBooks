import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { Respuesta } from 'src/app/models/respuesta';
import {Router} from "@angular/router"


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  public user: User;
  
  constructor(private userService: UserService, private router: Router) {
    this.user = new User(0, '', '', '', '', '');
  }

  onSubmit(form:NgForm){
   
    
    this.login(form.value)
    
    console.log(form.value);
    // console.log(this.user);

    
  }
  ngOnInit(): void {
  }

  login(user:User):void{
    // this.userService.loginUser(form.value).subscribe((res:Respuesta)=>{
      this.userService.loginUser(user).subscribe((res: any)=>{
      //(res:any), se usa any porque devuelve una respuesta que no es concreta
      
      if (res.error == false) {
        this.userService.user = res.result[0]
        this.userService.logueado = true;
        this.router.navigate(['/books'])
      }else{
        console.log("El usuario no esta registrado");
      }
    })
  }


}