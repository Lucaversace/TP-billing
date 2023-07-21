import { HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { Client } from '@shared/models/interfaces/client';
import { LocalStorageUtils } from '@shared/utils/local-storage.utils';
import { Observable, of } from 'rxjs';

export function mockApiInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  if (req.method === 'GET') {
    return mockGetEndpoints(req);
  }
  if (req.method === 'POST') {
    return mockPostEndpoints(req);
  }
  return next(req);
}

function mockGetEndpoints(
  req: HttpRequest<unknown>
): Observable<HttpResponse<unknown>> {
  if (req.url === '/api/clients') {
    const clients = LocalStorageUtils.getItem('clients');
    return of(new HttpResponse({ status: 200, body: clients }));
  }
  if (req.url.startsWith('/api/clients/')) {
    const id = +req.url.split('/').pop();
    const client = LocalStorageUtils.getElementById('clients', id);
    return of(new HttpResponse({ status: 200, body: client }));
  }
  if (req.url === '/api/products') {
    const products = LocalStorageUtils.getItem('products');
    return of(new HttpResponse({ status: 200, body: products }));
  }
  throw new Error("This endpoint doesn't exist");
}

function mockPostEndpoints(
  req: HttpRequest<unknown>
): Observable<HttpResponse<unknown>> {
  if (req.url === '/api/clients') {
    const client = req.body as Client;
    LocalStorageUtils.writeElemInItem(client, 'clients');
    return of(new HttpResponse({ status: 301, body: client }));
  }
  throw new Error("This endpoint doesn't exist");
}
