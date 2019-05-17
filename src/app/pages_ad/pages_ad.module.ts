import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages_ad.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModalModule } from 'ngx-modal';
import { IndexDirective } from './index.directive';
import { Pages_adComponent } from './pages_ad.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        ModalModule
    ],
    declarations: [
        Pages_adComponent,
        LoginComponent,
        HomePageComponent,
        IndexDirective
    ]
})
export class Pages_adModule { }
