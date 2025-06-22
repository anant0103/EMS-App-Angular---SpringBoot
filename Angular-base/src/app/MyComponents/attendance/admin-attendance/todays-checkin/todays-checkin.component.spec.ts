import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysCheckinComponent } from './todays-checkin.component';

describe('TodaysCheckinComponent', () => {
  let component: TodaysCheckinComponent;
  let fixture: ComponentFixture<TodaysCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaysCheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaysCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
