import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgimageContentComponent } from './bgimage-content.component';

describe('BgimageContentComponent', () => {
  let component: BgimageContentComponent;
  let fixture: ComponentFixture<BgimageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgimageContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgimageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
