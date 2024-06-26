import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  salvarToken(token: string) {
    return localStorage.setItem(KEY, token);
  }

  retornarToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  excluirToken() {
    return localStorage.removeItem(KEY);
  }

  possuiToken() {
    return !!this.retornarToken();
  }

}
