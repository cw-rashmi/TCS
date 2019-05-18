import { Routes, RouterModule } from '@angular/router';
import { AcceptedPostComponent } from './accepted-post.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AcceptedPostComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
