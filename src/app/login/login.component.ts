import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
// import { async } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public authService: AuthService) {
    this.createAuthForm();
  }

  ngOnInit() {
   
  }
  createAuthForm() {
    this.authForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }
  onRegister() {
    this.authService.signup(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
        alert('Registro con exito');
      })
      .catch(() => {

        alert('Algo salio mal');
      });
  }
  onLogin() {
    this.authService.login(this.authForm.value.email, this.authForm.value.password)
      .then(() => {
        this.router.navigate(['/home']);
        alert('Login Con exito');
      })
      .catch(() => {

        alert('Algo Salio mal');
      });
  }
/*
  onLogout() {
    this.authService.logout()
      .then(() => {
        alert('Adiosin');
      })
      .catch(() => {

        alert('Algo salio mal');
      });
  }
*/
  doFace() {
    this.authService.conFacebook()
    .then(() => {
      this.router.navigate(['/home']);
      alert('Exito');
    })
    .catch(() => {

      alert('Algo salio mal');
    });
  }
  doGoogle() {
    this.authService.conGoogle()
    .then(() => {
      this.router.navigate(['/home']);
      alert('Exito');
    })
    .catch(() => {
      alert('Algo salio mal');
    });
  }
}

