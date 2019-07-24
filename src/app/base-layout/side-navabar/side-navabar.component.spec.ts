import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavabarComponent } from './side-navabar.component';

describe('SideNavabarComponent', () => {
  let component: SideNavabarComponent;
  let fixture: ComponentFixture<SideNavabarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavabarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
