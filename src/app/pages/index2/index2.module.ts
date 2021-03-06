import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './index2.routing';
import { Index2Component } from './index2.component';
import { ModalModule } from 'ngx-modal';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    ModalModule
  ],
  declarations: [Index2Component]
})
export class Index2Module { }
