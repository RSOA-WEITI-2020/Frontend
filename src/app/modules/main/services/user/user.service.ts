import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/model/user.model';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';
import { CurrentUserService } from 'src/app/core/auth/current-user.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authBaseUrl = environment.authBaseUrl;
  private paymentBaseUrl = environment.paymentBaseUrl;

  constructor(private http: HttpClient, private currentUserService: CurrentUserService) {}

  updateUserData(user: User): Observable<void> {
    const body = {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      address: user.address,
    };
    return this.http.post(`${this.authBaseUrl}/v1/updatedata`, body).pipe(
      tap(() => this.currentUserService.updateUser()),
      map(() => null)
    );
  }

  changePassword(password: string) {
    const body = {
      password,
    };
    return this.http.post(`${this.authBaseUrl}/v1/changepassword`, body).pipe(
      tap(() => this.currentUserService.updateUser()),
      map(() => null)
    );
  }

  topUpAccount(value: number): Observable<string> {
    const body = {
      amount: value,
    };
    return this.http.post(`${this.paymentBaseUrl}/v1/create`, body).pipe(map(({ uri }: any) => uri));
  }
}
