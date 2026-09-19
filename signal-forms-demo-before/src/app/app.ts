import { Component, signal } from '@angular/core';
import { Form } from './form/form';
import { Form2 } from './form-2/form2';
import { Form3 } from './form-3/form3';
import { Form4 } from './form-4/form4';
import { Form5 } from './form-5/form5';

@Component({
  imports: [Form, Form2, Form3, Form4, Form5],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('signal-forms-demo-before');
}
