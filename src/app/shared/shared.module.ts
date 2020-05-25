import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { FrameComponent } from './frame/frame.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtAuthInterceptor } from './interceptors/jwt-auth.interceptor';



@NgModule({
  declarations: [
    FrameComponent
  ],
  imports: [
    ComponentsModule,
    AngularFireAuthModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule
  ],
  exports: [
    FrameComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtAuthInterceptor, multi: true }
  ]
})
export class SharedModule { }
