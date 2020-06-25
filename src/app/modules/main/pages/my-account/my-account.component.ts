import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CurrentUserService } from 'src/app/core/auth/current-user.service';
import { User } from 'src/app/core/model/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  showTopUpModal = false;
  showChangeDataModal = false;
  showChangePasswordModal = false;

  topUpForm: FormGroup;
  userDataForm: FormGroup;
  changePasswordForm: FormGroup;

  user: User;

  constructor(
    private currentUserService: CurrentUserService,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.topUpForm = this.fb.group({
      value: [],
    });

    this.userDataForm = this.fb.group({
      email: [],
      first_name: [],
      last_name: [],
      address: [],
    });

    this.changePasswordForm = this.fb.group({
      password: [],
      passwordRepeat: [],
    });

    currentUserService.currentUser$.subscribe((user) => (this.user = user));
  }

  // password validator

  ngOnInit() {}

  onShowTopUp() {
    this.showTopUpModal = true;
  }

  onShowChangeData() {
    this.userDataForm.patchValue({
      email: this.user.email,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      address: this.user.address,
    });

    this.showChangeDataModal = true;
  }

  onShowChangePassword() {
    this.showChangePasswordModal = true;
  }

  onTopUp() {
    this.userService.topUpAccount(this.topUpForm.value.value).subscribe(
      (uri) => {
        window.location.href = uri;
      },
      (err) => alert(err.message)
    );
  }

  onSaveUserData() {
    const data = this.userDataForm.value;
    this.userService.updateUserData(data).subscribe(
      () => {
        this.showChangeDataModal = false;
        this.currentUserService.currentUser$.pipe(take(1)).subscribe((user) => (this.user = user));
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  onSavePassword() {
    const { password } = this.changePasswordForm.value;

    this.userService.changePassword(password).subscribe(
      () => {
        this.showChangePasswordModal = false;
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  onCloseModal() {
    this.showTopUpModal = false;
    this.showChangeDataModal = false;
    this.showChangePasswordModal = false;
  }

  isPasswordValid() {
    const { password, passwordRepeat } = this.changePasswordForm.value;
    console.log(password && password === passwordRepeat && password.length > 3);
    return password && password === passwordRepeat && password.length > 3;
  }
}
