import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from './Class/account';
import { AuthService } from './Service/auth.service';
import { ToastrNotifierService } from '../Notifier/toastr-notifier.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  currentTab = 'login';
  usernameValid = false;
  passwordValid = false;
  repeatPasswordValid = false;
  gmailValid = false;

  ButtonDisabled = true;

  constructor(private router: Router, private authService: AuthService, private notifier: ToastrNotifierService) {
    localStorage.clear();

    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern('[^\\s]*')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('[^\\s]*')
      ])
    });

    this.registerForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        Validators.pattern('[^\\s]*')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('[^\\s]*')
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('[^\\s]*')
      ]),
      gmail: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('[^\\s]*'),
        Validators.email
      ])
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.usernameValid = !this.loginForm.controls['username'].invalid && (this.loginForm.controls['username'].dirty || this.loginForm.controls['username'].touched);
      this.passwordValid = !this.loginForm.controls['password'].invalid && (this.loginForm.controls['password'].dirty || this.loginForm.controls['password'].touched);
      this.ButtonDisabled = !this.loginForm.valid || !this.usernameValid || !this.passwordValid;
    });

    this.registerForm.valueChanges.subscribe(() => {
      this.usernameValid = !this.registerForm.controls['username'].invalid && (this.registerForm.controls['username'].dirty || this.registerForm.controls['username'].touched);
      this.passwordValid = !this.registerForm.controls['password'].invalid && (this.registerForm.controls['password'].dirty || this.registerForm.controls['password'].touched);
      this.repeatPasswordValid = !this.registerForm.controls['repeatPassword'].invalid && (this.registerForm.controls['repeatPassword'].dirty || this.registerForm.controls['repeatPassword'].touched);
      this.gmailValid = !this.registerForm.controls['gmail'].invalid && (this.registerForm.controls['gmail'].dirty || this.registerForm.controls['gmail'].touched);

      this.ButtonDisabled = !this.registerForm.valid || !this.usernameValid || !this.passwordValid || !this.repeatPasswordValid || !this.gmailValid;
    });
  }

  toggleForm(tab: string) {
    this.currentTab = tab;
    this.loginForm.controls['username'].reset();
    this.loginForm.controls['password'].reset();

    this.registerForm.controls['username'].reset();
    this.registerForm.controls['password'].reset();
    this.registerForm.controls['repeatPassword'].reset();
    this.registerForm.controls['gmail'].reset();
  }

  Login() {
    let account: Account = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
      gmail: ''
    };

    if (this.authService.isExist(account)) {
      localStorage.setItem('username', this.loginForm.get('username')?.value);
      
      this.notifier.showSuccess('ĐĂNG NHẬP THÀNH CÔNG!', 'Xin chào ' + localStorage.getItem('username'));

      this.router.navigate(['/list']);
    }
    else {
      this.notifier.showWarning('KHÔNG THỂ ĐĂNG NHẬP!','Tài khoản hoặc mật khẩu không đúng!')
    }
  }

  Register() {
    this.loginForm.controls['username'].invalid
    const password = this.registerForm.controls['password'].value;
    const repeatPassword = this.registerForm.controls['repeatPassword'].value;

    if (password !== repeatPassword) {
      this.notifier.showWarning('KHÔNG THỂ ĐĂNG KÝ!', 'Mật khẩu không khớp!');
      return;
    }
    
    const account = {
      username: this.registerForm.controls['username'].value,
      password: password,
      gmail: this.registerForm.controls['gmail'].value
    }
    
    if (!this.authService.isRegister(account)) {
      this.authService.Add(account);
      this.notifier.showSuccess('ĐĂNG KÝ THÀNH CÔNG!', '');
      this.toggleForm('register');
    }
    else {
      this.notifier.showWarning('KHÔNG THỂ ĐĂNG KÝ!', 'Tên đăng nhập hoặc gmail đã có người sử dụng!');
    }
  }
}
