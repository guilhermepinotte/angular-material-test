import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  cadastroForm: FormGroup | null = null;

  getCadastro(): FormGroup | null {
    return this.cadastroForm;
  }

  setCadastro(form: FormGroup | null) {
    this.cadastroForm = form;
  }

}
