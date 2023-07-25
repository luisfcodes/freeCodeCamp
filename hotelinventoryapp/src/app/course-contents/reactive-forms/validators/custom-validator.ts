import { AbstractControl } from "@angular/forms";

export class CustomValidator {
  static ValidateName(control: AbstractControl){
    const value = control.value as string;

    if(value === 'test' || value === 'teste'){
      return { invalidName: true };
    }

    return null;
  }
}
