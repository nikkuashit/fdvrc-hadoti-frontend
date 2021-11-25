import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGlanceComponent } from './project-glance.component';

describe('ProjectGlanceComponent', () => {
  let component: ProjectGlanceComponent;
  let fixture: ComponentFixture<ProjectGlanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectGlanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
