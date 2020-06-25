import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { switchMap, takeUntil, tap, take } from 'rxjs/operators';
import { User } from '../model/user.model';
import { AuthAPIService } from './auth-api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService implements OnDestroy {
  private currentUserSubject$: BehaviorSubject<User>;
  private subscriptions$: Subject<void>;

  currentUser$: Observable<User>;

  constructor(private auth: AuthService, private authAPI: AuthAPIService) {
    this.subscriptions$ = new Subject<void>();
    this.currentUserSubject$ = new BehaviorSubject<User>(null);
    this.currentUser$ = this.currentUserSubject$.asObservable();

    auth.authToken$
      .pipe(
        tap(console.log),
        switchMap((token) => (token ? authAPI.getUserForToken(token) : of(null))),
        takeUntil(this.subscriptions$)
      )
      .subscribe((user) => this.currentUserSubject$.next(user));
  }

  ngOnDestroy() {
    this.subscriptions$.next();
    this.subscriptions$.complete();
  }

  updateUser() {
    console.log('xFD');
    this.auth.authToken$
      .pipe(
        tap(console.log),
        switchMap((token) => (token ? this.authAPI.getUserForToken(token) : of(null))),
        take(1)
      )
      .subscribe((user) => this.currentUserSubject$.next(user));
  }
}
