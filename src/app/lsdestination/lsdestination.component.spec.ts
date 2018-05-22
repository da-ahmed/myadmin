import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsdestinationComponent } from './lsdestination.component';

describe('LsdestinationComponent', () => {
  let component: LsdestinationComponent;
  let fixture: ComponentFixture<LsdestinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsdestinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsdestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
