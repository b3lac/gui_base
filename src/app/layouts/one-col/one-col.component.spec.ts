import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColComponent } from './one-col.component';

describe('OneColComponent', () => {
  let component: OneColComponent;
  let fixture: ComponentFixture<OneColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
