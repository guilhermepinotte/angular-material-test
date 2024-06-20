import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrl: './seletor-passageiro.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
    },
  ],
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() quantidade: number = 0;

  value: number = 0;
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(valor: any): void {
    this.value = valor;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  incrementar() {
    this.value++;
    this.onChange(this.value);
    this.onTouched();
  }
  decrementar() {
    if (this.value > 0) {
      this.value--;
      this.onChange(this.value);
      this.onTouched();
    }
  }
}
