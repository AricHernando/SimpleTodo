import { Route } from '@angular/router';


export const appRoutes: Route[] = [
    {
        path: 'entry',
        loadChildren: () => import('@todo/entry').then(({ EntryRoutes }) => EntryRoutes)
    },
    {
        path: '',
        loadChildren: () => import('./app.component').then(({ AppComponent }) => AppComponent)
    }
];
