import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardCenterComponent } from './info-card-center.component';

describe('InfoCardCenterComponent', () => {
  let component: InfoCardCenterComponent;
  let fixture: ComponentFixture<InfoCardCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCardCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
