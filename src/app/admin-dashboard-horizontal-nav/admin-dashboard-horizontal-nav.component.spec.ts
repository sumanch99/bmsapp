import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardHorizontalNavComponent } from './admin-dashboard-horizontal-nav.component';

describe('AdminDashboardHorizontalNavComponent', () => {
  let component: AdminDashboardHorizontalNavComponent;
  let fixture: ComponentFixture<AdminDashboardHorizontalNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardHorizontalNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardHorizontalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
