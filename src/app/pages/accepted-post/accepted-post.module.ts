import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { routing } from './accepted-post.routing';
import { AcceptedPostComponent } from './accepted-post.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [AcceptedPostComponent]
})
export class AcceptedPostModule { }
