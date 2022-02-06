import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSliderSquareComponent } from './card-slider-square.component';

describe('CardSliderSquareComponent', () => {
  let component: CardSliderSquareComponent;
  let fixture: ComponentFixture<CardSliderSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSliderSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSliderSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
