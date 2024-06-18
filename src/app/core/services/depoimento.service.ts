import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Depoimento } from '../types/type';

@Injectable({
  providedIn: 'root',
})
export class DepoimentoService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  listar(): Observable<Depoimento[]> {
    return this.http.get<Depoimento[]>(`${this.apiUrl}/depoimentos`);
  }
}
