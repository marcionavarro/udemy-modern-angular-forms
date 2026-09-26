import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  email,
  form,
  FormField,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  required,
} from '@angular/forms/signals';

interface SignUpForm {
  username: string;
  email: string;
  age: number;
}

@Component({
  imports: [FormField, JsonPipe],
  selector: 'app-form2',
  styleUrl: './form2.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form2.html',
})
export class Form2 {
  protected model = signal<SignUpForm>({
    username: '',
    email: '',
    age: 0,
  });

  protected form = form(this.model, (s) => {
    required(s.username, {
      message: 'Nome de usuário é obrigatório',
    });
    required(s.email, {
      message: 'Email é obrigatório',
    });
    minLength(s.username, 3, {
      message: 'Nome de usuário no minímo de 3 caracteres',
    });
    maxLength(s.username, 10, {
      message: 'Nome de usuário no máximo de 10 caracteres',
    });
    pattern(s.username, /^[a-zA-Z0-9]+$/, {
      message: 'Deve conter apenas letras e números',
    });
    email(s.email, { message: 'Digite um e-mail válido' });
    min(s.age, 13, { message: 'Você deve ter pelo menos 13 anos de idade' });
    max(s.age, 120, {
      message: 'Parabéns, você não é velho demais para participar!',
    });
  });
}
