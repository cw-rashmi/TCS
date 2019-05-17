import { Routes, RouterModule } from '@angular/router';
import { Index2Component } from './index2.component';

const childRoutes: Routes = [
    {
        path: '',
        component: Index2Component
    }
];

export const routing = RouterModule.forChild(childRoutes);
