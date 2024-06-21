import { AutenticacaoService } from './../../core/services/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    this.autenticacaoService.autenticar(
      this.loginForm.value.email,
      this.loginForm.value.senha
    ).subscribe( {
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/home');
      },
      error: (error) => {
        console.log(error);
      }
    } );
  }
}
