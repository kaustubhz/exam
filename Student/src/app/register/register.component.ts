import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  students:any;
  constructor() {
    this.students=[];
   }

  ngOnInit() {
    // this.students=this.service.getAllStudents();
  }

}
