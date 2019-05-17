import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './home-page.routing';
import { ModalModule } from 'ngx-modal';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    ModalModule
  ],
  declarations: []
})
export class HomePageModule { }
