import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersWithParnentchildComponent } from './servers-with-parnentchild.component';

describe('ServersWithParnentchildComponent', () => {
  let component: ServersWithParnentchildComponent;
  let fixture: ComponentFixture<ServersWithParnentchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServersWithParnentchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersWithParnentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
