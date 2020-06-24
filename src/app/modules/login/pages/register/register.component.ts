import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isError: boolean;
  isLoading: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstName: [],
      lastName: [],
      address: [],
    });

    this.isError = false;
    this.isLoading = false;
  }

  ngOnInit() {}

  onSubmit() {
    if (this.isLoading) {
      return;
    }

    const { email, password, firstName, lastName, address } = this.registerForm.value;
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      this.tryRegister(email, password, firstName, lastName, address);
    }
  }

  tryRegister(email: string, password: string, firstName: string, lastName: string, address: string) {
    this.isLoading = true;
    this.registerForm.disable();
    this.authService.register(email, password, firstName, lastName, address).subscribe(
      () => {
        this.router.navigate(['/main']);
      },
      () => {
        this.isError = true;
        this.isLoading = false;
        this.registerForm.enable();
      }
    );
  }
}
