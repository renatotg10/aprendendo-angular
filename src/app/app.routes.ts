import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { ListComponent } from './features/list/list';
import { CreateComponent } from './features/create/create';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'list', component: ListComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit/:id', component: CreateComponent },

    // fallback (se digitar a rota errada)
    { path: '**', redirectTo: '' },
];
