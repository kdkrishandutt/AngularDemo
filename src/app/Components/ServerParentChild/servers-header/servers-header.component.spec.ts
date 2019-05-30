import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersHeaderComponent } from './servers-header.component';

describe('ServersHeaderComponent', () => {
  let component: ServersHeaderComponent;
  let fixture: ComponentFixture<ServersHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
