import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutDetailComponent } from './donut-detail.component';

describe('DonutDetailComponent', () => {
  let component: DonutDetailComponent;
  let fixture: ComponentFixture<DonutDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonutDetailComponent]
    });
    fixture = TestBed.createComponent(DonutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
