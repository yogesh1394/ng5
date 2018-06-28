import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { UsersService } from '../../services/users.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  title = 'Add User';
  angForm: FormGroup;

  constructor(private usersservice: UsersService, private fb: FormBuilder) {
    this.createForm();
  }
  
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      age: ['', Validators.required ],
      email: ['', Validators.required ]
   });
  }

  /* addUser(name, age, email) {
    this.usersservice.addUser(name, age, email);
  } */

  ngOnInit() {
  }

}
