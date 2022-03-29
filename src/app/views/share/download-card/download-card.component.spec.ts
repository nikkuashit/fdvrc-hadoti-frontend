import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCardComponent } from './download-card.component';

describe('DownloadCardComponent', () => {
  let component: DownloadCardComponent;
  let fixture: ComponentFixture<DownloadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
