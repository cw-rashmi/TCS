import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewadComponent } from './newad.component';
import { routing } from './newad.router';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [NewadComponent]
})
export class NewadModule { }
