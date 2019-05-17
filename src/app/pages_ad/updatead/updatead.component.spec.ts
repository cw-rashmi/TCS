import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateadComponent } from './updatead.component';

describe('UpdateadComponent', () => {
  let component: UpdateadComponent;
  let fixture: ComponentFixture<UpdateadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
