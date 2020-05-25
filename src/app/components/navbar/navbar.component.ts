import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  user: firebase.User;
  constructor(private fbAuth: AngularFireAuth) { }

  ngOnInit() {
    this.fbAuth.user.subscribe((data) => {
      this.user = data;
    });
  }

}
