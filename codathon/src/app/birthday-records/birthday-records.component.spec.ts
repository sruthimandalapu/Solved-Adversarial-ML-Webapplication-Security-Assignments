import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayRecordsComponent } from './birthday-records.component';

describe('BirthdayRecordsComponent', () => {
  let component: BirthdayRecordsComponent;
  let fixture: ComponentFixture<BirthdayRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirthdayRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
