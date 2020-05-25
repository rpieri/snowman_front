import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { LoadingController } from '@ionic/angular';
import { AddUser } from 'src/app/models/users/add-user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private fbAuth: AngularFireAuth,
    private loadingCtrl: LoadingController
  ) { }


  async login() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    this.fbAuth.signInWithPopup(new auth.FacebookAuthProvider())
      .then((data) => {
        var addUser = new AddUser(data.user.uid, data.user.displayName, data.user.email, data.user.phoneNumber);
        this.userService.post(addUser).subscribe(_ => loading.dismiss(), _ => loading.dismiss())
      }).catch(_ => loading.dismiss());
  }


}
