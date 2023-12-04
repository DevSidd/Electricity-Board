import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationChartComponent } from './application-chart.component';

describe('ApplicationChartComponent', () => {
  let component: ApplicationChartComponent;
  let fixture: ComponentFixture<ApplicationChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationChartComponent]
    });
    fixture = TestBed.createComponent(ApplicationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
