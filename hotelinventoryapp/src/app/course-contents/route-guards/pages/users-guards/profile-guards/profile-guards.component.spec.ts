import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGuardsComponent } from './profile-guards.component';

describe('ProfileGuardsComponent', () => {
  let component: ProfileGuardsComponent;
  let fixture: ComponentFixture<ProfileGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGuardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
