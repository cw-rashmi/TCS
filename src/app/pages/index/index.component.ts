import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { PagesComponent, Login } from '../pages.component';
import { DataService } from "../data.service";
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService, DataService],
})
export class IndexComponent implements OnInit {
  @Input() isSelected : boolean = false;
  @Input() isPublisher : boolean = false;
  @Input() isAdvertiser : boolean = false;


  public AnimationBarOption;
  isLoginSuccess: boolean = false;
  isPublisherLogin: boolean = false;
  isAdvertiserLogin: boolean = false;

  // onload(){
  //   this.isLoginSuccess = this.logincomponent.getLogin();
  //   this.isPublisherLogin = this.logincomponent.isPublisherLogin;
  //   this.isAdvertiserLogin = this.logincomponent.isAdvertiserLogin;
  //   console.log(this.isLoginSuccess, this.isAdvertiserLogin, this.isPublisherLogin, this.logincomponent.hey);
  // }

  // onChangeData(){ 
  //   const newData = true;
  //   this._sharedSer.changeData(newData); 
  //   } 

  constructor(private _chartsService: ChartsService,
    private _sharedSer: DataService) { 
      //  this.isLoginSuccess = this.data.getlogin();
      //console.log(this.isLoginSuccess);
    }

  ngAfterViewInit() {
    //console.log(this.data)
    // this.isLoginSuccess = this.data.getlogin();
    // console.log(this.isLoginSuccess);
    // this.isLoginSuccess = this.logincomponent.getLogin();
    // this.isPublisherLogin = this.logincomponent.isPublisherLogin;
    // this.isAdvertiserLogin = this.logincomponent.isAdvertiserLogin;
    //console.log(this.isLoginsuccess, this.isAdvertiserLogin, this.isPublisherLogin, this.logincomponent.hey);
  }

  ngOnInit() {
    //this._sharedSer.change.subscribe(isOpen => this.isOpen = isOpen);
    this.isLoginSuccess = Boolean(localStorage.getItem('isLoggedIn'));
    this.isPublisherLogin = (localStorage.getItem('isPublisher'))=="false" ? false: true;
    this.isAdvertiserLogin = (localStorage.getItem('isAdvertiser'))=="false" ? false : true;
    console.log(localStorage.getItem('isPublisher'), localStorage.getItem('isAdvertiser'));
    console.log(this.isLoginSuccess, this.isPublisherLogin, this.isAdvertiserLogin);
    if(this.isLoginSuccess && this.isPublisherLogin){
      this.isPublisher = true;
      this.isSelected = true;
    }
    else if(this.isLoginSuccess && this.isAdvertiserLogin){
      this.isAdvertiser = true;
      this.isSelected = true;
    }
    else{
      this.isSelected = false;
    }
    console.log(this.isPublisher, this.isAdvertiser)
    console.log(this.isLoginSuccess, this.isPublisherLogin, this.isAdvertiserLogin);
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
  }
}
