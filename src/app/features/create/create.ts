import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PersonService } from '../../services/person';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router
  ) {
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

    this.personService.add(this.form.getRawValue());

    this.form.reset({ name: '', email: '', age: 18});
    this.submitted = false;

    this.router.navigate(['/list']);
  }
}