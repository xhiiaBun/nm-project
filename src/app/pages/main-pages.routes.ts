import { Routes } from '@angular/router';
import { TictactoeComponent } from './games/tictactoe/tictactoe.component';
import { GuesswordComponent } from './games/guessword/guessword.component';
import { wordGuardResolver } from '../guards/word-guard.resolver';
import { WordService } from './games/services/get-word-service.service';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Nightmore | Homepage',
        loadComponent: () => import('./home/home.component').then((home) => home.HomeComponent)
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
                    // resolve :{
                    //     wordData: [wordGuardResolver]
                    // }
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
        path: '',
        redirectTo: '/home', pathMatch: 'full' },
];
