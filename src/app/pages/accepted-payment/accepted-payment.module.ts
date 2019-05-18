import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { AcceptedPaymentComponent } from './accepted-payment.component';
import { routing } from './accepted-payment.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [AcceptedPaymentComponent]
})
export class AcceptedPaymentModule { }
