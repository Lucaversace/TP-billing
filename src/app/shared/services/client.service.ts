import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/interfaces/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private http = inject(HttpClient);

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>('/api/clients');
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`/api/clients/${id}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>('/api/clients', client);
  }
}
