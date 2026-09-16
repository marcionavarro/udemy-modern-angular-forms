import { Component, signal } from '@angular/core';
import { Form } from './form/form';
import { Form2 } from './form-2/form2';
import { Form3 } from './form-3/form3';

@Component({
  imports: [Form, Form2, Form3],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('signal-forms-demo-before');
}
