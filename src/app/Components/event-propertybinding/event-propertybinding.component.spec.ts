import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPropertybindingComponent } from './event-propertybinding.component';

describe('EventPropertybindingComponent', () => {
  let component: EventPropertybindingComponent;
  let fixture: ComponentFixture<EventPropertybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventPropertybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPropertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
