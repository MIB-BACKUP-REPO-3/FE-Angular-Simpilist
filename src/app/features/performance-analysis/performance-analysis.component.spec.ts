import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAnalysisComponent } from './performance-analysis.component';

describe('PerformanceAnalysis', () => {
  let component: PerformanceAnalysisComponent;
  let fixture: ComponentFixture<PerformanceAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceAnalysisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PerformanceAnalysisComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
