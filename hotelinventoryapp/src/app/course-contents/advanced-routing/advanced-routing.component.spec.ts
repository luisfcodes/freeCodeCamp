import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedRoutingComponent } from './advanced-routing.component';

describe('AdvancedRoutingComponent', () => {
  let component: AdvancedRoutingComponent;
  let fixture: ComponentFixture<AdvancedRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
