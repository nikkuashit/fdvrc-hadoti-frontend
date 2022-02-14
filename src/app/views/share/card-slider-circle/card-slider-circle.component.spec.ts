import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSliderCircleComponent } from './card-slider-circle.component';

describe('CardSliderCircleComponent', () => {
  let component: CardSliderCircleComponent;
  let fixture: ComponentFixture<CardSliderCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSliderCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSliderCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
