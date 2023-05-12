import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningDataSharingComponent } from './learning-data-sharing.component';

describe('LearningDataSharingComponent', () => {
  let component: LearningDataSharingComponent;
  let fixture: ComponentFixture<LearningDataSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningDataSharingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningDataSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
