import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class FormValidations {
  static mismatchField(otherField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fieldValue = control.value;
      const otherFieldValue = control.root.get(otherField);
      if (fieldValue !== otherFieldValue) {
        return { equalTo: true };
      }
      return null;
    };
  }
}
