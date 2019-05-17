import { Routes, RouterModule } from '@angular/router';
import { UpdateadComponent } from './updatead.component';

/* children components */
import {UpdateComponent} from './components/update/update.component'
import {DeleteComponent} from './components/delete/delete.component'

const childRoutes: Routes = [
    {
        path: '',
        component: UpdateadComponent,
        children: [
            { path: '', redirectTo: 'update', pathMatch: 'full' },
            { path: 'update', component: UpdateComponent },
            { path: 'delete', component: DeleteComponent }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
