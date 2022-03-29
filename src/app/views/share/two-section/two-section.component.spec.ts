import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSectionComponent } from './two-section.component';

describe('TwoSectionComponent', () => {
  let component: TwoSectionComponent;
  let fixture: ComponentFixture<TwoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
