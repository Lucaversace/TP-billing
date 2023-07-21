import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Client } from '@shared/models/interfaces/client';
import { ClientService } from '@shared/services/client.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-clients-list-page',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './clients-list-page.component.html',
  styleUrls: ['./clients-list-page.component.css'],
})
export class ClientsListPageComponent {
  private clientService = inject(ClientService);
  clients$: Observable<Client[]>;
  displayedColumns: string[] = ['firstname', 'lastname', 'birthDate', 'email'];

  ngOnInit(): void {
    this.clients$ = this.clientService.getAllClients();
  }
}
