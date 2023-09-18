import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatoryFiledComponent } from './mandatory-filed.component';

describe('MandatoryFiledComponent', () => {
  let component: MandatoryFiledComponent;
  let fixture: ComponentFixture<MandatoryFiledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandatoryFiledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandatoryFiledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
