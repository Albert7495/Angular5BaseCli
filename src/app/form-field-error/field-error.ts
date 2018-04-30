import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/** @title Form field with error messages */
@Component({
  selector: 'field-error',
  templateUrl: 'field-error.html',
  styleUrls: ['field-error.css']
})
export class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Campo Requerido' :
        this.email.hasError('email') ? 'Email No Valido' :
            '';

  }
}