import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLeftEndComponent } from './component-left-end.component';

describe('ComponentLeftEndComponent', () => {
  let component: ComponentLeftEndComponent;
  let fixture: ComponentFixture<ComponentLeftEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLeftEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLeftEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
