import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./pages/main-pages.routes').then((home) => home.routes)
    }
];
