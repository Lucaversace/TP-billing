import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'factures',
    loadComponent: () =>
      import(
        '@features/billings/billings-list-page/billings-list-page.component'
      ).then((m) => m.BillingsListPageComponent),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import(
        '@features/clients/clients-list-page/clients-list-page.component'
      ).then((m) => m.ClientsListPageComponent),
  },
  {
    path: 'clients/creer',
    loadComponent: () =>
      import(
        '@features/clients/client-create-page/client-create-page.component'
      ).then((m) => m.ClientCreatePageComponent),
  },
  {
    path: '**',
    redirectTo: '/clients',
  },
];
