import { FormularioService } from './../../core/services/formulario.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UnidadeFederativa } from '../../core/types/type';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.scss',
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(
    null,
    Validators.required
  );
  @Input() perfilComponent = false;
  @Input() titulo: string = 'Crie sua conta';
  @Input() textoBotao: string = 'CADASTRAR';
  @Output() acaoClique = new EventEmitter();
  @Output() sair = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      estado: this.estadoControl,
      senha: [null, [Validators.required, Validators.minLength(3)]],
      confirmarEmail: [
        null,
        [
          Validators.required,
          Validators.email,
          FormValidations.mismatchField('email'),
        ],
      ],
      confirmarSenha: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          FormValidations.mismatchField('senha'),
        ],
      ],
      aceitarTermos: [null, [Validators.requiredTrue]],
    });

    if (this.perfilComponent) {
      this.cadastroForm.get('aceitarTermos')?.setValidators(null);
    } else {
      this.cadastroForm
        .get('aceitarTermos')
        ?.setValidators(Validators.requiredTrue);
    }

    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formularioService.setCadastro(this.cadastroForm);
  }

  executarAcao() {
    this.acaoClique.emit(this.cadastroForm.value);
  }

  deslogar() {
    this.sair.emit();
  }
}
