import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareCardHoverComponent } from './square-card-hover.component';

describe('SquareCardHoverComponent', () => {
  let component: SquareCardHoverComponent;
  let fixture: ComponentFixture<SquareCardHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareCardHoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareCardHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
