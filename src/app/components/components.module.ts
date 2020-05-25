import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserCardComponent } from './user-card/user-card.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    NavbarComponent,
    UserCardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AngularFireAuthModule,
    IonicModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
