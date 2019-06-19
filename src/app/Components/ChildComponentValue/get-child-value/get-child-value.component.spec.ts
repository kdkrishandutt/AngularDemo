import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetChildValueComponent } from './get-child-value.component';

describe('GetChildValueComponent', () => {
  let component: GetChildValueComponent;
  let fixture: ComponentFixture<GetChildValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetChildValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetChildValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
