import { Route } from "@angular/router";
import { EntryComponent } from "./entry/entry.component";

export const EntryRoutes: Route[] = [
    {
        path: ':category',
        component: EntryComponent,
        
    },
];