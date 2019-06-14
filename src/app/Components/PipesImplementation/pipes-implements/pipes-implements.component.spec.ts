import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesImplementsComponent } from './pipes-implements.component';

describe('PipesImplementsComponent', () => {
  let component: PipesImplementsComponent;
  let fixture: ComponentFixture<PipesImplementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesImplementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesImplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
