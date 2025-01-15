import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { withInterceptors } from '@angular/common/http';
import { serverErrorInterceptor } from './interceptors/server-error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideClientHydration(),
    provideHttpClient(withInterceptors([serverErrorInterceptor])),
    importProvidersFrom(BrowserAnimationsModule)]
};
