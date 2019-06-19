import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentvialocalvariableComponent } from './parentvialocalvariable.component';

describe('ParentvialocalvariableComponent', () => {
  let component: ParentvialocalvariableComponent;
  let fixture: ComponentFixture<ParentvialocalvariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentvialocalvariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentvialocalvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
