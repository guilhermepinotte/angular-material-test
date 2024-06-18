import { UnidadeFederativa } from './../../../core/types/type';
import { Component, Input, OnInit } from '@angular/core';
import { UnidadeFederativaService } from '../../../core/services/unidade-federativa.service';
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

  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions$?: Observable<UnidadeFederativa[]>;

  constructor(private servico: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.servico.listar().subscribe((uf) => {
      this.unidadesFederativas = uf;
      console.log(this.unidadesFederativas);
    });
    console.log(this.control);

    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name
          ? this._filter(name as string)
          : this.unidadesFederativas.slice();
      })
    );
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value.toLowerCase();
    console.log(filterValue);

    return this.unidadesFederativas.filter((ufs) =>
      ufs.nome.toLowerCase().includes(filterValue)
    );
  }
}
