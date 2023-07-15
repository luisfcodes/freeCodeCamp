import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteServiceComponent } from './route-service.component';

describe('RouteServiceComponent', () => {
  let component: RouteServiceComponent;
  let fixture: ComponentFixture<RouteServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
