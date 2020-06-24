import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { last, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TokenBundle, UserCredentials } from '../model/auth.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthAPIService {
  private authBaseUrl: string;

  constructor(private http: HttpClient) {
    this.authBaseUrl = environment.authBaseUrl;
  }

  signIn(email: string, password: string): Observable<TokenBundle> {
    const credentials: UserCredentials = {
      email,
      password,
    };

    return this.http.post(`${this.authBaseUrl}/v1/login`, credentials).pipe(
      map((response: TokenBundle) => {
        if (response == null || response.accessToken == null || response.refreshToken == null) {
          return null;
        }
        return response;
      })
    );
  }

  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    address: string
  ): Observable<TokenBundle> {
    const data = {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      address,
    };

    return this.http.post(`${this.authBaseUrl}/v1/register`, data).pipe(
      map((response: TokenBundle) => {
        if (response == null || response.accessToken == null || response.refreshToken == null) {
          return null;
        }
        return response;
      })
    );
  }

  refresh(refreshToken: string): Observable<TokenBundle> {
    return this.http
      .post(`${this.authBaseUrl}/v1/refresh-token`, {
        headers: new HttpHeaders({ Authorization: `Bearer ${refreshToken}` }),
      })
      .pipe(
        map((response: TokenBundle) => {
          if (response == null || response.accessToken == null || response.refreshToken == null) {
            return null;
          }
          return response;
        })
      );
  }
  getUserForToken(accessToken: string): Observable<User> {
    return this.http
      .get(`${this.authBaseUrl}/v1/me`, { headers: new HttpHeaders({ Authorization: `Bearer ${accessToken}` }) })
      .pipe(map((user: User) => user));
  }
}
