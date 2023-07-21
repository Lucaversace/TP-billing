import { Component, inject } from '@angular/core';
import { NavigationSection } from './core/layout/models/navigation-section';
import { LayoutComponent } from './core/layout/ui/layout/layout.component';
import { InitAppService } from './shared/services/init-app.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LayoutComponent],
})
export class AppComponent {
  initAppService = inject(InitAppService);

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

  ngOnInit(): void {
    // Initialise la fake API
    this.initAppService.init();
  }
}
