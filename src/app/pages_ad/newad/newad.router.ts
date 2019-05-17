import { Routes, RouterModule } from '@angular/router';
import { NewadComponent } from './newad.component';

const childRoutes: Routes = [
    {
        path: '',
        component: NewadComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
