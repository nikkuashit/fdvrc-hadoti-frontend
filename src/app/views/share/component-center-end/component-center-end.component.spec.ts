import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCenterEndComponent } from './component-center-end.component';

describe('ComponentCenterEndComponent', () => {
  let component: ComponentCenterEndComponent;
  let fixture: ComponentFixture<ComponentCenterEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCenterEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCenterEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
