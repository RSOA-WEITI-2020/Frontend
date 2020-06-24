import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private authBaseUrl = environment.authBaseUrl;
  private paymentBaseUrl = environment.paymentBaseUrl;

  constructor(private http: HttpClient) {}

  updateUserData(user: User): Observable<User> {
    return of(null);
  }

  topUpAccount(value: number): Observable<void> {
    return of(null);
  }
}
