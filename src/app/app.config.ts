import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideSignalFormsConfig } from '@angular/forms/signals';
import { NG_STATUS_CLASSES } from '@angular/forms/signals/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideSignalFormsConfig({
      classes: {
        'ng-touched': ({ state }) => state().touched(),
        'ng-untouched': ({ state }) => !state().touched(),
        'ng-dirty': ({ state }) => state().dirty(),
        'ng-pristine': ({ state }) => !state().dirty(),
        'ng-valid': ({ state }) => state().valid(),
        'ng-invalid': ({ state }) => state().invalid() && state().touched(),
        'ng-pending': ({ state }) => state().pending(),
      },
    }),
  ],
};
