import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

interface SignUpForm {
  profile: {
    username: string;
  };
}

@Component({
  imports: [FormField, JsonPipe],
  selector: 'app-form',
  styleUrl: './form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.html',
})
export class Form {
  protected model = signal<SignUpForm>({
    profile: {
      username: '',
    },
  });

  protected form = form(this.model);
}
