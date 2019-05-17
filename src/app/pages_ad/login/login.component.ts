import { Component, OnInit, Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { DataService } from "../data.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [DataService],
})
export class LoginComponent implements OnInit {
  data:any;
  isLoginSucess: boolean = false;

  constructor(private _sharedSer: DataService) { 
    const isLoginSucess = Observable.of(this.isLoginSucess);
    }

  ngOnInit() {
    // this._sharedSer.currentData.subscribe(data => this.data = data); 
  }
  onChangeData(){ 
    this._sharedSer.toggle();  
  };

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

