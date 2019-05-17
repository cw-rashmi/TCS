import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

    isOpen = false;

    @Output() change: EventEmitter<boolean> = new EventEmitter();
  
    toggle() {
      this.isOpen = !this.isOpen;
      this.change.emit(this.isOpen);
    }
  

}