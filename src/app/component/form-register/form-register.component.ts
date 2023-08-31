import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  public myForm: FormGroup;
  constructor(private formBuilder: FormBuilder) 
  { 
    this.buildForm();
  }

  public register() 
  {
    let myUser = this.myForm.value;
    console.log(myUser);
    
  }
  private buildForm()
  {
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      nombre: [, Validators.required],
      apellidos:[, Validators.required],
      email: [, [ Validators.required, Validators.email]],
      password:[, [Validators.required, Validators.minLength(minPassLength)]],
      repeatPassword:[, [Validators.required, this.checkPasswords]],
    })
  }
  private checkPasswords(control: AbstractControl)
  {
    let resultado = {matchPassword: true};

    

    if (control.parent?.value.password == control.value)
      resultado = null;

    return resultado;
  }

  // private checkPasswords(group: FormGroup) {
  //   const password = group.get('password').value;
  //   const repeatPassword = group.get('repeatPassword').value;

  //   return password === repeatPassword ? null : { passwordMismatch: true };
  // }
  ngOnInit(): void 

  {
  }
  
  // ngOnInit(){
  //   let minLength:number = 8;
  //   this.myForm = new FormGroup({
  //     'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
  //     'apellidos': new FormControl(null, [Validators.required, Validators.minLength(3)]),
  //     'email': new FormControl(null, [Validators.required, Validators.email]),
  //     'password': new FormControl(null, [Validators.required, Validators.minLength(minLength)]),
  //     'repeatPassword': new FormControl(null, [Validators.required, Validators.minLength(minLength)])
  //   })
  // }
  
  // onSubmit(){
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
  // }
}
