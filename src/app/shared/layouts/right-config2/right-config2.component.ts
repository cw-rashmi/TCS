import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import swal from 'sweetalert2';

@Component({
  selector: 'right-config2',
  templateUrl: './right-config2.component.html',
  styleUrls: ['./right-config2.component.scss']
})

export class RightConfig2Component implements OnInit {

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

  _publisherLogin(modal){ 
      modal.close();
    localStorage.setItem('isLoggedIn', "true"); 
    localStorage.setItem('isPublisher', "true");
    localStorage.setItem('isAdvertiser', "false");
    location.reload();
  };

  _advertiserLogin(modal){
      modal.close();
    localStorage.setItem('isLoggedIn', "true"); 
    localStorage.setItem('isPublisher', "false");
    localStorage.setItem('isAdvertiser', "true");
    location.reload();
  }

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Successfull Login!',
      text: 'close it!',
    });
  }
}
