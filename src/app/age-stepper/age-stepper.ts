import { Component, input, model } from '@angular/core';
import {
  FormValueControl,
  ValidationError,
  WithOptionalFieldTree,
} from '@angular/forms/signals';

@Component({
  imports: [],
  selector: 'app-age-stepper',
  styleUrl: './age-stepper.scss',
  templateUrl: './age-stepper.html',
})
export class AgeStepper implements FormValueControl<number> {
  value = model<number>(0);

  disabled = input(false);
  readonly = input(false);

  touched = model(false);
  invalid = model(false);
  errors = input<readonly WithOptionalFieldTree<ValidationError>[]>([]);

  readonly min = input<number | undefined>();
  readonly max = input<number | undefined>();

  protected increment() {
    this.touched.set(true);
    const next = this.value() + 1;
    this.value.set(next);
  }

  protected decrement() {
    this.touched.set(true);
    const next = this.value() - 1;
    const min = 0;
    if (min !== undefined && next < min) {
      return;
    }
    this.value.set(next);
  }
}
