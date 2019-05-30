import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingSearchingComponent } from './sorting-searching.component';

describe('SortingSearchingComponent', () => {
  let component: SortingSearchingComponent;
  let fixture: ComponentFixture<SortingSearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingSearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
