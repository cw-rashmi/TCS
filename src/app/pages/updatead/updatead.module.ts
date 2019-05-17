import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './updatead.routing';
import { DeleteComponent } from './components/delete/delete.component';
import { UpdateComponent } from './components/update/update.component';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-modal';
import { UpdateadComponent } from './updatead.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ModalModule,
    routing
  ],
  declarations: [
    UpdateadComponent,
    UpdateComponent,
    DeleteComponent]
})
export class UpdateadModule { }
