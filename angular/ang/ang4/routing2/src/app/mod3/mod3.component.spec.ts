import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod3Component } from './mod3.component';

describe('Mod3Component', () => {
  let component: Mod3Component;
  let fixture: ComponentFixture<Mod3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mod3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
