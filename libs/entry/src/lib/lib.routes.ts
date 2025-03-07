import { Route } from "@angular/router";
import { EntryDetailComponent } from "./entry/entryDetail/entryDetail.component";

export const EntryRoutes: Route[] = [
    {
        path: 'detail/:entryId',
        component: EntryDetailComponent,
    },
]