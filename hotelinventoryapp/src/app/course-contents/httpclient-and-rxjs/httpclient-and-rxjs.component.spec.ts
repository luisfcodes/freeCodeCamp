import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientAndRxjsComponent } from './httpclient-and-rxjs.component';

describe('HttpclientAndRxjsComponent', () => {
  let component: HttpclientAndRxjsComponent;
  let fixture: ComponentFixture<HttpclientAndRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpclientAndRxjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpclientAndRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
