import { Component } from '@angular/core';
import { NavigationSection } from './core/layout/models/navigation-section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'billing';
  menuList: NavigationSection[] = [
    {
      text: 'Liste des factures',
      path: 'factures'
    },
    {
      text: 'Liste des clients',
      path: 'clients'
    },
    {
      text: 'Créer un client',
      path: 'clients/creer'
    },
  ]
}
