import { FormBuscaService } from './../../core/services/form-busca.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  constructor(public formBuscaService: FormBuscaService) {}
}
