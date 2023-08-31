import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  public user: User;
  constructor() {
    this.user = new User(0, '', '', '', '', '');
  }

  onSubmit(form:NgForm){
    console.log(form.value);
    console.log(this.user);
  }
  ngOnInit(): void {
  }
}