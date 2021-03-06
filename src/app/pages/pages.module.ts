import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ModalModule } from 'ngx-modal';
import { IndexDirective } from './index.directive';
import { AdvertiserLoginComponent } from './advertiser-login/advertiser-login.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        ModalModule
    ],
    declarations: [
        PagesComponent,
        LoginComponent,
        HomePageComponent,
        IndexDirective,
        AdvertiserLoginComponent
    ]
})
export class PagesModule { }
