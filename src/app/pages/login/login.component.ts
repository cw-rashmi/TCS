import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginSuccess : boolean = false;
  isAdvertiserLogin: boolean = false;
  isPublisherLogin: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  _publisherLogin(){
    console.log("In publisher login clicked method")
    this.isLoginSuccess = true;
    this.isPublisherLogin = true;
  }

  _advertiserLogin(){
    console.log("In advertiser login clicked method")
    this.isLoginSuccess = true;
    this.isAdvertiserLogin = true;
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
      title: 'Success!',
      text: 'close it!',
    });
  }

}
