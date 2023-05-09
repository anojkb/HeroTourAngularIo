import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearndataBindingComponent } from './learndata-binding.component';

describe('LearndataBindingComponent', () => {
  let component: LearndataBindingComponent;
  let fixture: ComponentFixture<LearndataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearndataBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearndataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
