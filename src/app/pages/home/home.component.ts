import { Component, Input, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Depoimento, Promocao } from '../../core/types/type';
import { DepoimentoService } from '../../core/services/depoimento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  listaPromocoes!: Promocao[];
  listaDepoimentos!: Depoimento[];

  constructor(
    private promocaoService: PromocaoService,
    private depoimentoService: DepoimentoService
  ) {}

  ngOnInit(): void {
    this.promocaoService.listar().subscribe((promocoes) => {
      this.listaPromocoes = promocoes;
    });
    this.depoimentoService.listar().subscribe((depoimentos) => {
      this.listaDepoimentos = depoimentos;
    });
  }
}
