import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildviaviewchildComponent } from './childviaviewchild.component';

describe('ChildviaviewchildComponent', () => {
  let component: ChildviaviewchildComponent;
  let fixture: ComponentFixture<ChildviaviewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildviaviewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildviaviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
