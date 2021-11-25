import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INewsComponent } from './i-news.component';

describe('INewsComponent', () => {
  let component: INewsComponent;
  let fixture: ComponentFixture<INewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(INewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
