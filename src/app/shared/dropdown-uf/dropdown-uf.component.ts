import { UnidadeFederativa } from '../../core/types/type';
import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from '../../core/services/unidade-federativa.service';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss',
})
export class DropdownUfComponent implements OnInit {
  @Input() label!: string;
  @Input() iconPrefix!: string;
  @Input() placeholder!: string;
  @Input() control!: FormControl;

  listaUfs: UnidadeFederativa[] = [];

  filteredOptions$?: Observable<UnidadeFederativa[]>;

  constructor(private servico: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.servico.listar().subscribe((dados) => {
      this.listaUfs = dados;
      // console.log(this.listaUfs);
    });

    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const nomeUf = typeof value === 'string' ? value : value.nome;

    const filterValue = nomeUf?.toLowerCase();

    return this.listaUfs.filter((ufs) =>
      ufs.nome.toLowerCase().includes(filterValue)
    );
  }

  displayFn(uf: UnidadeFederativa): string {
    return uf && uf.nome ? uf.nome : '';
  }
}
