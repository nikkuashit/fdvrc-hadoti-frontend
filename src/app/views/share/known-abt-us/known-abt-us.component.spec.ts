import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownAbtUsComponent } from './known-abt-us.component';

describe('KnownAbtUsComponent', () => {
  let component: KnownAbtUsComponent;
  let fixture: ComponentFixture<KnownAbtUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnownAbtUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnownAbtUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
