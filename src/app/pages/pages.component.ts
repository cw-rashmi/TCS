import { Component, Input, OnInit } from '@angular/core';
import {DataService} from "./data.service"

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {
  @Input() isLogin: boolean = false;
  ngOnInit(){
    console.log(localStorage.getItem("isLoggedIn"));
    this.isLogin = localStorage.getItem("isLoggedIn")=="false" ? false : true;
  }
}

export class Login{
  isLoginSuccess: boolean;
  isPublisherLogin: boolean;
  isAdvertiserLogin: boolean;
  set(value){
    this.isLoginSuccess = value;
    console.log(this.isLoginSuccess);
  }
  get(){
    console.log(this.isLoginSuccess);
    return this.isLoginSuccess;
  }
}
