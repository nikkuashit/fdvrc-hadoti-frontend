import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRightEndComponent } from './component-right-end.component';

describe('ComponentRightEndComponent', () => {
  let component: ComponentRightEndComponent;
  let fixture: ComponentFixture<ComponentRightEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRightEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentRightEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
