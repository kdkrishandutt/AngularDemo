import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildvialocalvariableComponent } from './childvialocalvariable.component';

describe('ChildvialocalvariableComponent', () => {
  let component: ChildvialocalvariableComponent;
  let fixture: ComponentFixture<ChildvialocalvariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildvialocalvariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildvialocalvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
