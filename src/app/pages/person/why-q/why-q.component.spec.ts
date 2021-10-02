import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyQComponent } from './why-q.component';

describe('WhyQComponent', () => {
  let component: WhyQComponent;
  let fixture: ComponentFixture<WhyQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
