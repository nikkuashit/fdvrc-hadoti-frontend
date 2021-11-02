import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageWithUsComponent } from './engage-with-us.component';

describe('EngageWithUsComponent', () => {
  let component: EngageWithUsComponent;
  let fixture: ComponentFixture<EngageWithUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngageWithUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
