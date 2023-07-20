import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGuardsComponent } from './users-guards.component';

describe('UsersGuardsComponent', () => {
  let component: UsersGuardsComponent;
  let fixture: ComponentFixture<UsersGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersGuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
