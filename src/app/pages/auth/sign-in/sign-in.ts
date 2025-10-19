import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonComponent, InputComponent } from '../../../core/components';

@Component({
  templateUrl: './sign-in.html',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, InputComponent],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SignInPageComponent {
  private readonly fb = inject(FormBuilder);

  readonly form!: FormGroup;

  constructor() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    console.log(this.form);
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
