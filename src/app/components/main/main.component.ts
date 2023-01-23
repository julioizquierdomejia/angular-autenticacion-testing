import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserMetadata } from 'firebase/auth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private userSerivices:UserService, private router:Router){

  }

  ngOnInit(): void {
    
  }

  onClick(){
    this.userSerivices.logout()
    .then( ()=> {
      this.router.navigate(['/login']);
    } )
    .catch( error => console.log(error))
  }

}
