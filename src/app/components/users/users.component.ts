import { Component, OnInit } from '@angular/core';
import { User } from '../../modules/User'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
//properties/user interface

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;


  constructor() { }

  ngOnInit() {

    // setTimeout(() => {


      this.users = [

        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@gmail.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Jonson',
          email: 'kevin@yahoo.com',
          isActive: false,
          registered: new Date('03/11/2019 06:20:00'),
          hide: true
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          email: 'karen@gmail.com',
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        }
      ];

      this.loaded = true;
    // }, 2000);

  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    this.users.unshift(this.user);
    this.user = {

      firstName: '',
      lastName: '',
      email: ''
    }
  }

  // fireEvent(e) {
  //   // console.log('Button Clicked');
  //   console.log(e.type);
  // }

  onSubmit() {
    console.log(123);

  }

  // fireEvent(e) {
  //   console.log(e.type);
  //   console.log(e.target.value);
  // }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }
}
