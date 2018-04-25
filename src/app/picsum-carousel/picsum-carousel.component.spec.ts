import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsumCarouselComponent } from './picsum-carousel.component';

describe('PicsumCarouselComponent', () => {
  let component: PicsumCarouselComponent;
  let fixture: ComponentFixture<PicsumCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsumCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsumCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
