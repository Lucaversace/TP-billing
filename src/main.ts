import {
  HttpHandlerFn,
  HttpRequest,
  HttpResponse,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import clients from 'src/assets/data/clients.json';
import { AppComponent } from './app/app.component';
import { routes } from './app/core/layout/ui/layout/layout-routes';

function mockApiInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  if (req.url === '/api/client') {
    return of(new HttpResponse({ status: 200, body: clients }));
  }
  return next(req);
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([mockApiInterceptor])),
  ],
}).catch((err) => console.error(err));
