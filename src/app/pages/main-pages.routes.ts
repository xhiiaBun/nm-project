import { Routes } from '@angular/router';
import { TictactoeComponent } from './games/tictactoe/tictactoe.component';
import { GuesswordComponent } from './games/guessword/guessword.component';
import { BuildletterComponent } from './games/buildletter/buildletter.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Nightmore | Homepage',
        loadComponent: () => import('./home/home.component').then((home) => home.HomeComponent)
    },
    {
        path: 'collection',
        title: 'Nightmore | Collection',
        loadComponent: () => import('./collection/collection.component').then((coll) => coll.CollectionComponent)
    },
    {
        path: 'games',
        title: 'Nightmore | Games',
        loadComponent: () =>
            import('./games/games.component').then((games) => games.GamesComponent),
            children: [
                {
                    path: 'tictactoe',
                    component: TictactoeComponent
                },
                {
                    path: 'guessword',
                    component: GuesswordComponent,
                },
                {
                    path: 'buildletter',
                    component: BuildletterComponent
                }
            ]
    },
    {
        path: 'contact',
        title: 'Nightmore | Contact',
        loadComponent: () =>
            import('./contact/contact.component').then((contact) => contact.ContactComponent)
    },
    {
        path: 'signin',
        title: 'Nightmore | Sign In',
        loadComponent: () =>
            import('./signin/signin.component').then((signin) => signin.SigninComponent)
    },
    { 
        path: '',
        redirectTo: '/home', pathMatch: 'full' },
];
