import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { mockApiInterceptor } from '@core/interceptors/mock-api.interceptor';
import { AppComponent } from './app/app.component';
import { routes } from './app/core/layout/ui/layout/layout-routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([mockApiInterceptor])),
  ],
}).catch((err) => console.error(err));
