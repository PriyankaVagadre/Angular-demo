import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseTabComponent } from './close-tab.component';

describe('CloseTabComponent', () => {
  let component: CloseTabComponent;
  let fixture: ComponentFixture<CloseTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
