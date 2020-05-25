import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelper } from '../core/helpers/http.helper';
import { environment } from 'src/environments/environment';
import { AddUser } from '../models/users/add-user.model';
import { CommandResult } from '../core/models/command-result.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${environment.endpoints.backend}/user`

  constructor(
    private http: HttpClient,
    private httpHelper: HttpHelper) { }

  public post(model: AddUser) {
    return this.http.post<CommandResult<string>>(this.url, model)
      .pipe(
        tap(
          (command: CommandResult<any>) => this.httpHelper.handlerSuccess('User', command.message),
          (error) => this.httpHelper.handlerErrorCommand('User', error)
        )
      );
  }
}
