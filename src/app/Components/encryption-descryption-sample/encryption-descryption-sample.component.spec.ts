import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncryptionDescryptionSampleComponent } from './encryption-descryption-sample.component';

describe('EncryptionDescryptionSampleComponent', () => {
  let component: EncryptionDescryptionSampleComponent;
  let fixture: ComponentFixture<EncryptionDescryptionSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncryptionDescryptionSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncryptionDescryptionSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
