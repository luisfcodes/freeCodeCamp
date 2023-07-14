import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingBasicsComponent } from './routing-basics.component';

describe('RoutingBasicsComponent', () => {
  let component: RoutingBasicsComponent;
  let fixture: ComponentFixture<RoutingBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingBasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
