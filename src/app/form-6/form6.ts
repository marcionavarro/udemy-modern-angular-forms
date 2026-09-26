import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  resource,
  signal,
} from '@angular/core';
import {
  debounce,
  disabled,
  email,
  form,
  FormField,
  FormRoot,
  hidden,
  max,
  maxLength,
  min,
  minLength,
  pattern,
  readonly,
  required,
  submit,
  validateAsync,
} from '@angular/forms/signals';
import { UserIdMockService } from '../../service/UserIdMockService ';
import { AgeStepper } from '../age-stepper/age-stepper';
import { AuthApiMockService } from '../../service/auth-api.service';

interface SignUpForm {
  username: string;
  email: string;
  age: number;
  id: string;
  // newsletter: boolean;
  // frequency: string;
  guardianName: string;
  alternateEmails: string[];
}

@Component({
  imports: [FormField, JsonPipe, AgeStepper, FormRoot],
  selector: 'app-form6',
  styleUrl: './form6.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form6.html',
})
export class Form6 {
  private userId = inject(UserIdMockService).getUserId();
  protected model = signal<SignUpForm>({
    username: '',
    email: '',
    age: 0,
    id: this.userId,
    // newsletter: false,
    // frequency: 'daily',
    guardianName: '',
    alternateEmails: [''],
  });

  private api = inject(AuthApiMockService);

  protected form = form(
    this.model,
    (s) => {
      // disabled(s.age);
      readonly(s.id);
      // disabled(s.frequency, ({ valueOf }) => !valueOf(s.newsletter));
      /*  hidden(s.guardianName, ({ valueOf }) => valueOf(s.age) >= 18);
    required(s.guardianName, {
      message: 'Nome do responsável é obrigatório',
      when: ({ valueOf }) => valueOf(s.age) < 18,
    }); */

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
      // min(s.age, 13, { message: 'Você deve ter pelo menos 13 anos de idade' });
      /*  max(s.age, 120, {
      message: 'Parabéns, você não é velho demais para participar!',
    }); */
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
    },
    {
      submission: {
        action: async (form) => {
          const value = form().value();
          const result = await this.api.register(value);
          if (result.ok) {
            console.log('Valor enviado: ', value);
            return undefined;
          }
          return [
            {
              kind: 'server.unavailable',
              message: `
                Nosso serviço de cadastro está indisponível. 
                Por favor, tente novamente em alguns minutos.
            `,
            },
          ];
        },
      },
    },
  );

  protected addAlternateEmail() {
    this.model.update((current) => ({
      ...current,
      alternateEmails: [...current.alternateEmails, ''],
    }));
  }

  protected removeAlternateEmail(index: number) {
    this.model.update((current) => ({
      ...current,
      alternateEmails: [
        ...current.alternateEmails.filter((_, i) => i !== index),
      ],
    }));
  }

  private checkUsernameAvailability(username: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const taken = ['admin', 'test', 'marcio'];
        resolve(!taken.includes(username.toLowerCase()));
      }, 1000);
    });
  }
}
