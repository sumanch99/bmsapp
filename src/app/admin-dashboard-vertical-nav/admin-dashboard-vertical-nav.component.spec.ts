import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardVerticalNavComponent } from './admin-dashboard-vertical-nav.component';

describe('AdminDashboardVerticalNavComponent', () => {
  let component: AdminDashboardVerticalNavComponent;
  let fixture: ComponentFixture<AdminDashboardVerticalNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardVerticalNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardVerticalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
