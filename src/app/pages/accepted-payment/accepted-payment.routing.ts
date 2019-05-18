import { Routes, RouterModule } from '@angular/router';
import { AcceptedPaymentComponent } from './accepted-payment.component';

const childRoutes: Routes = [
    {
        path: '',
        component: AcceptedPaymentComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
