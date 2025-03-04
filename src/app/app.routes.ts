import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'rxjs',
        loadChildren: () => import('@todo/entry').then(({ EntryRoutes }) => EntryRoutes)
    },
];
