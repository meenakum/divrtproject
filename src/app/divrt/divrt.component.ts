 import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {User} from '../divrt/user'

@Component({
  selector: 'app-divrt',
  templateUrl: './divrt.component.html',
  styleUrls: ['./divrt.component.css']
})
export class DivrtComponent implements OnInit {

  user = new User('saquib','1234');
  constructor() { }

  ngOnInit() {
  }

  login(val:any){
    console.log(val)
  }
}
