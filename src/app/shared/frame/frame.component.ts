import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html'
})
export class FrameComponent implements OnInit {

  user: firebase.User;
  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private fbAuth: AngularFireAuth,

  ) {
  }
  ngOnInit() {
    this.fbAuth.user.subscribe((data) => {
      this.user = data;
    });
  }

  async goToPage(page: string) {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot(page);
  }
}
