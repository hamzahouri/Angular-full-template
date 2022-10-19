import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtierGrossiteComponent } from './courtier-grossite.component';

describe('CourtierGrossiteComponent', () => {
  let component: CourtierGrossiteComponent;
  let fixture: ComponentFixture<CourtierGrossiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtierGrossiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtierGrossiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
