import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  resource,
  signal,
} from '@angular/core';
import {
  debounce,
  email,
  form,
  FormField,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  required,
  validateAsync,
} from '@angular/forms/signals';

interface SignUpForm {
  username: string;
  email: string;
  age: number;
}

@Component({
  imports: [FormField, JsonPipe],
  selector: 'app-form4',
  styleUrl: './form4.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form4.html',
})
export class Form4 {
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
    validateAsync(s.username, {
      params: ({ value }) => {
        const val = value();
        if (!val || val.length < 3) return undefined;
        return val;
      },
      factory: (params) =>
        resource({
          params,
          loader: async ({ params }) => {
            const username = params;
            const available = await this.checkUsernameAvailability(username);
            return available;
          },
        }),
      onSuccess: (result: boolean) => {
        if (result === false) {
          return {
            kind: 'username_taken',
            message: 'Este nome de usuário já está sendo usado.',
          };
        }
        return null;
      },
      onError: (error: unknown) => {
        console.log('Erro de validação: ', error);
        return null;
      },
    });
    debounce(s.username, 300);
  });

  private checkUsernameAvailability(username: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const taken = ['admin', 'test', 'marcio'];
        resolve(!taken.includes(username.toLowerCase()));
      }, 1000);
    });
  }
}
