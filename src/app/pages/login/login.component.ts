import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';

import { LogInService } from 'src/app/shared/log-in.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public myForm: FormGroup;
  public loginError: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LogInService) {
    this.buildForm();

  }


  private buildForm() {
    const minPassLength = 8;

    this.myForm = this.formBuilder.group({
      username: [, [Validators.required]],
      password: [, [Validators.required, Validators.minLength(minPassLength)]],
    });
  }

  private checkPasswords(control: AbstractControl) {
    let resultado = { matchPassword: true };

    if (control.parent?.value.password == control.value)
      resultado != null;

    return resultado;
  }

  login(): void {
    if (this.myForm.valid) {
      const user: User = this.myForm.value;

      this.loginService.login(user).subscribe(
        (user: User) => {

          if (user) {
            this.loginService.isLoggedIn = true;
            this.router.navigate(['/home'])
          }

        },
        error => {
          this.loginError = true; // Set loginError to true if authentication fails
        }

      );
    }
  }
}
