import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[clickDirective]'
})
export class RightConfig2Directive implements OnInit {
   @Input() clickDirective : string;

  constructor(private el: ElementRef) { 
  }
  ngOnInit(){
    if(this.clickDirective=="Advertiser"){
        console.log("Advertiser")
    }
    else if(this.clickDirective=="Publisher"){
        console.log("Publisher")
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("isPublisher","true");
    }
  }
}
