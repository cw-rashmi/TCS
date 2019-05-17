import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'right-config',
  templateUrl: './right-config.component.html',
  styleUrls: ['./right-config.component.scss']
})

export class RightConfigComponent implements OnInit {

  isConfigToggle: boolean = false;
  isLogin: boolean = false;
  constructor(private _globalService: GlobalService) { }

  ngOnInit() { }

  configToggle() {
    this.isConfigToggle = !this.isConfigToggle;
    //this._globalService._sidebarToggleState(!this.isConfigToggle);
    this._globalService.dataBusChanged('sidebarToggle', !this.isConfigToggle);
  }
  Login() {
    this.isConfigToggle = !this.isConfigToggle;
  }

  logout(){
    localStorage.setItem("isLoggedIn","false");
    localStorage.setItem("isPublisher","false");
    localStorage.setItem("isAdvertiser","false");
    location.reload();
  }
}
