import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { List } from './features/list/list';
import { Create } from './features/create/create';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'list', component: List },
    { path: 'create', component: Create },

    // fallback (se digitar a rota errada)
    { path: '**', redirectTo: '' },
];
