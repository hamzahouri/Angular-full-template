import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtierSimpleComponent } from './courtier-simple.component';

describe('CourtierSimpleComponent', () => {
  let component: CourtierSimpleComponent;
  let fixture: ComponentFixture<CourtierSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtierSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtierSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
