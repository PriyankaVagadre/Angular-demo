import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindClassesComponent } from './bind-classes.component';

describe('BindClassesComponent', () => {
  let component: BindClassesComponent;
  let fixture: ComponentFixture<BindClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
