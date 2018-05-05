import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColComponent } from './two-col.component';

describe('TwoColComponent', () => {
  let component: TwoColComponent;
  let fixture: ComponentFixture<TwoColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
