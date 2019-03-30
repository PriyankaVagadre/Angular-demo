import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDataFetchComponent } from './http-data-fetch.component';

describe('HttpDataFetchComponent', () => {
  let component: HttpDataFetchComponent;
  let fixture: ComponentFixture<HttpDataFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpDataFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDataFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
