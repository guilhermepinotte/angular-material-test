import { Component, Input } from '@angular/core';
import { Depoimento } from '../../core/types/type';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.scss'
})
export class CardDepoimentoComponent {
  @Input() depoimento!: Depoimento;

  // depoimento: string = `
  //   Recomendo fortemente a agência de viagens Jornada.
  //   Eles oferecem um serviço personalizado e de alta qualidade
  //   que excedeu minhas expectativas em minha última viagem.
  // `
  // autoria: string = 'Mariana Faustino'
}
