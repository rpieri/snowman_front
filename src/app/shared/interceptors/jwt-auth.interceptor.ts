import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { take, switchMap } from "rxjs/operators";
import { Injectable } from '@angular/core';

@Injectable()
export class JwtAuthInterceptor implements HttpInterceptor {
    constructor(private afAuth: AngularFireAuth) {

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.afAuth.idToken.pipe(
            take(1),
            switchMap(idToken => {
                let clone = request.clone()
                if (idToken) {
                    clone = clone.clone({ headers: request.headers.set('Authorization', 'Bearer ' + idToken) });
                }
                return next.handle(clone)
            })
        )
    }

}