import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgForm} from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService) 
  { 
    this.buildForm();
  }

  public register() 
  {
    /* let myUser = this.myForm.value;
    console.log(myUser); */
    let {nombre,apellidos,email,foto,password} = this.myForm.value
    console.log(nombre,apellidos,email,foto,password)
    
    let user = new User(0,nombre,apellidos,email,foto,password)//para crear un nuevo objeto de la Clase User y mandarlo al registerUser
   

    this.userService.registerUser(user).subscribe((res: any)=>{
      console.log(res)
      if (res.error == false) {
       console.log(res)
      }
    })
    
  }
  private buildForm()
  {
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellidos:[, Validators.required],
      email: [, [ Validators.required, Validators.email]],
      foto:[, Validators.required],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      /* repeatPassword:[, [Validators.required], { validators: this.checkPasswords}], */
      repeatPassword:[, Validators.required],
    } , { validators: this.checkPasswords} )
  }
  /*this.myForm = this.fb.group({
    password: ['', [Validators.required]],
    confirmPassword: ['']
  }, { validators: this.checkPasswords })
*/
  /*checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value
    return pass === confirmPass ? null : { notSame: true }
  }*/

  public checkPasswords(group: AbstractControl)
  {
    //let resultado = {notMatchPassword: true};
    //let pass = group.get('password').value;
    //let pass = control.parent?.value.password;
    //let confirmPass = control.parent?.value.repeatPassword;
    //let confirmPass = control.get('repeatPassword').value
   // console.log(pass)
    //console.log(confirmPass)

    const pass = group.get("password")?.value;
    const confirmPass = group.get("repeatPassword")?.value;

    if(pass && confirmPass && pass !== confirmPass){
      console.log("las contraseñas no coinciden");
      return {notMatchPassword: true}
    }

    return null;
      
  }


  // private checkPasswords(group: FormGroup) {
  //   const password = group.get('password').value;
  //   const repeatPassword = group.get('repeatPassword').value;

  //   return password === repeatPassword ? null : { passwordMismatch: true };
  // }
  ngOnInit(): void {}

    
  //onSubmit(){
    

  //   let name = this.myForm.get('name').value;
  //   let apellidos = this.myForm.get('apellidos').value;
  //   let email = this.myForm.get('email').value;
  //   let password = this.myForm.get('password').value;
  //   let repeatPassword = this.myForm.get('repeatPassword').value;

  //   console.log(`Nombre: ${name}, Apellidos: ${apellidos}`);
  //   console.log(`Correo: ${email}`);
  //   console.log(`Contraseña: ${password}, Verificación: ${repeatPassword}`);
    
  //   if(password === repeatPassword){
  //     console.log("contraseñas coinciden");
  //   }else{
  //     console.log("No coinciden contraseñas");
  //   }
 //}
}
