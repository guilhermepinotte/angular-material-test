import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserService } from './user.service';

interface AuthResponse {
  acces_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apiUrl = environment.apiUrl;
  private token = '';

  constructor(private http: HttpClient, private userService: UserService) {}

  autenticar(
    email: string,
    senha: string
  ): Observable<HttpResponse<AuthResponse>> {
    return this.http
      .post<AuthResponse>(
        `${this.apiUrl}/auth/login`,
        { email, senha },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          // const authToken = res.headers.get('x-access-token') ?? '';
          const authToken = res.body?.acces_token ?? '';
          // this.token = authToken;
          this.userService.salvarToken(authToken);
        })
      );
  }
}
