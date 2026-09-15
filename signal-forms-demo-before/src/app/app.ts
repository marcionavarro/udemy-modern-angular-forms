import { Component, signal } from '@angular/core';
import { Form } from './form/form';

@Component({
  imports: [Form],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal(
    'signal-forms-demo-before',
  );
}
