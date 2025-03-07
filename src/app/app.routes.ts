import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@todo/homepage').then(({ HomepageRoutes }) => HomepageRoutes)
    },
    {
        path: 'entry',
        loadChildren: () => import('@todo/entry').then(({ EntryRoutes }) => EntryRoutes)
    }
];
