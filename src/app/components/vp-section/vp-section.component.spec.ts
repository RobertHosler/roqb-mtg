import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VpSectionComponent } from './vp-section.component';

describe('VpSectionComponent', () => {
  let component: VpSectionComponent;
  let fixture: ComponentFixture<VpSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VpSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
