import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formReg!: FormGroup;

  constructor(
    private userservice:UserService,
    private router:Router,
  ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {
    console.log('init my application')
  }

  onSubmit(){
    this.userservice.register(this.formReg.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/login']);
    })
    .catch(error =>  console.log(error))
    
  }


}
