import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCustomPipeComponent } from './date-custom-pipe.component';

describe('DateCustomPipeComponent', () => {
  let component: DateCustomPipeComponent;
  let fixture: ComponentFixture<DateCustomPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateCustomPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
