import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthorizePageComponent } from './not-authorize-page.component';

describe('NotAuthorizePageComponent', () => {
  let component: NotAuthorizePageComponent;
  let fixture: ComponentFixture<NotAuthorizePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAuthorizePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAuthorizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
