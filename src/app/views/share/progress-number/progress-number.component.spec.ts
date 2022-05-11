import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressNumberComponent } from './progress-number.component';

describe('ProgressNumberComponent', () => {
  let component: ProgressNumberComponent;
  let fixture: ComponentFixture<ProgressNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
