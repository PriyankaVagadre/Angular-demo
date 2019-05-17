import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSnapshotComponent } from './router-snapshot.component';

describe('RouterSnapshotComponent', () => {
  let component: RouterSnapshotComponent;
  let fixture: ComponentFixture<RouterSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
