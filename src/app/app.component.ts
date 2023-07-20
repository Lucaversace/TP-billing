import { Component } from '@angular/core';
import { NavigationSection } from './core/layout/models/navigation-section';
import { LayoutComponent } from './core/layout/ui/layout/layout.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LayoutComponent],
})
export class AppComponent {
  title = 'billing';
  menuList: NavigationSection[] = [
    {
      text: 'Liste des factures',
      path: 'factures',
    },
    {
      text: 'Liste des clients',
      path: 'clients',
    },
    {
      text: 'Créer un client',
      path: 'clients/creer',
    },
  ];
}
