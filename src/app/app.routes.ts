import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/main-pages.routes').then((home) => home.routes)
    },
    {
        path: '**',
        loadComponent: () => import('./404/404.component').then((error) => error.NoFoundComponent)
    }
];
