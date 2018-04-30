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
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';

  }
}