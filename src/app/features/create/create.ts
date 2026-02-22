import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './create.html',
  styleUrl: './create.css',
})
export class Create {
  submitted = false;
  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      age: [18, [Validators.required, Validators.min(0), Validators.max(120)]],
    });
  }

  submit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('FORM OK ✅', this.form.getRawValue());
  }
}