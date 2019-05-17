import { Component, Input } from '@angular/core';
import {DataService} from "./data.service"

@Component({
  selector: 'app-pages',
  templateUrl: './pages_ad.component.html',
  styleUrls: ['./pages_ad.component.scss']
})

export class Pages_adComponent {
  @Input() isLogin: false;
}