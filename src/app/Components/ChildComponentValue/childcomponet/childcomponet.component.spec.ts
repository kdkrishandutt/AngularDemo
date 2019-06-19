import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomponetComponent } from './childcomponet.component';

describe('ChildcomponetComponent', () => {
  let component: ChildcomponetComponent;
  let fixture: ComponentFixture<ChildcomponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcomponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
