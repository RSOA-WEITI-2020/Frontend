import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
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

  constructor(currentUserService: CurrentUserService, private fb: FormBuilder, private userService: UserService) {
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

  onTopUp() {}

  onSaveUserData() {
    const data = this.userDataForm.value;
    this.userService.updateUserData(data).subscribe(
      (user) => {
        this.showChangeDataModal = false;
        this.user = user;
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  onSavePassword() {
    const { password, passwordRepeat } = this.changePasswordForm.value;
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
