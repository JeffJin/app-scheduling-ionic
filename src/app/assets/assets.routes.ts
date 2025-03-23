import { Routes } from '@angular/router';
import { AssetsPage } from './assets.page';

export const assetRoutes: Routes = [
  {
    path: '',
    component: AssetsPage,
    children: [
      {
        path: 'images',
        loadComponent: () =>
          import('./images/images.component').then((m) => m.ImagesComponent),
      },
      {
        path: 'videos',
        loadComponent: () =>
          import('./videos/videos.component').then((m) => m.VideosComponent),
      },
      {
        path: 'documents',
        loadComponent: () =>
          import('./documents/documents.component').then((m) => m.DocumentsComponent),
      },
      {
        path: '',
        redirectTo: '/assets/videos',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/assets/videos',
    pathMatch: 'full',
  },
];
