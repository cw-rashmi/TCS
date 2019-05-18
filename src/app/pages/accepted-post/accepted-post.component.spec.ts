import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedPostComponent } from './accepted-post.component';

describe('AcceptedPostComponent', () => {
  let component: AcceptedPostComponent;
  let fixture: ComponentFixture<AcceptedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
