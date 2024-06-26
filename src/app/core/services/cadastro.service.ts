import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../types/type';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) {}

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/auth/cadastro`, usuario);
  }

  // buscar(token: string): Observable<Usuario> {
  //   const headers = { Authorization: `Bearer ${token}` };
  //   return this.http.get<Usuario>(`${this.apiUrl}/auth/perfil`, { headers });
  // }
  buscar(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/auth/perfil`);
  }

  // editar(usuario: Usuario, token: string): Observable<Usuario> {
  //   const headers = { Authorization: `Bearer ${token}` };
  //   return this.http.patch<Usuario>(`${this.apiUrl}/auth/perfil`, usuario, {
  //     headers,
  //   });
  // }
  editar(usuario: Usuario): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.apiUrl}/auth/perfil`, usuario);
  }
}
