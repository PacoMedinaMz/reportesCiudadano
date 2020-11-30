import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RNormalComponent } from './r-normal.component';

describe('RNormalComponent', () => {
  let component: RNormalComponent;
  let fixture: ComponentFixture<RNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
