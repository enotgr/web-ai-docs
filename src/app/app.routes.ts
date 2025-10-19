import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard').then((m) => m.DashboardPageComponent),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'auth/sign-in',
    loadComponent: () => import('./pages/auth/sign-in').then((m) => m.SignInPageComponent),
  },
  {
    path: 'auth/sign-up',
    loadComponent: () =>
      import('./pages/auth/sign-up').then((m) => m.SignUpPageComponent),
  },
  { path: 'auth', redirectTo: 'auth/sign-in', pathMatch: 'full' },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile').then((m) => m.ProfilePageComponent),
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./pages/documents').then((m) => m.DocumentsPageComponent),
  },
  { path: 'documents', redirectTo: 'docs', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found').then((m) => m.NotFoundPageComponent),
  },
];
