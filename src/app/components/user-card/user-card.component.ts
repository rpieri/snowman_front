import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {

  user?: firebase.User;
  constructor(private fbAuth: AngularFireAuth) { }

  ngOnInit() {
    this.fbAuth.user.subscribe((data) => {
      this.user = data;
    });
  }

  async logout() {
    this.fbAuth.signOut();
  }

}
