import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyFluidComponent } from './body-fluid.component';

describe('BodyFluidComponent', () => {
  let component: BodyFluidComponent;
  let fixture: ComponentFixture<BodyFluidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyFluidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyFluidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
