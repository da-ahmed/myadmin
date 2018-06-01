import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecompteComponent } from './updatecompte.component';

describe('UpdatecompteComponent', () => {
  let component: UpdatecompteComponent;
  let fixture: ComponentFixture<UpdatecompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
