import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.tabRoutes),
  },
  {
    path: 'assets',
    loadChildren: () => import('./assets/assets.routes').then( m => m.assetRoutes)
  },
];
